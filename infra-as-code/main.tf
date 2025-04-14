/*
    In this project we will deploy an application on EC2 server using IAC ***TERRAFORM***.
*/

/*
      // fetching the aws region using data source block
      data "aws_region" "current" {} -> we don't need to define data source here, becuase we have already define the provider region 
      into terraform.tf file
*/

/* Fetching the ubuntu AMI using data source block */
data "aws_ami" "ec2_ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"]
}

/* 
    Creating an SSH key pair for logging into EC2 instance.

    To generate a ssh key ( public and private ), we require TLS provider becuase AWS does not manage it, that ois already defined into "terraform.tf"
    The "tls_private_key" resource generates both the public and private keys.

*/

resource "tls_private_key" "generated" {
  algorithm = "RSA"
}

/*
    Storing the generated SSH key in a file using the "local" provider,  
    which is defined in "terraform.tf".

    The "local_file" resource saves the private key to the local system.
*/

resource "local_file" "storing_private_key_in_local_system" {
  filename = var.key_pair_name
  content  = tls_private_key.generated.private_key_pem
}

/*
    The "aws_key_pair" resource does not generate public or private keys;  
    it only manages the key pair for accessing the EC2 instance.  

    It imports the public key from the "tls_private_key" resource and uses it for authentication.
*/

resource "aws_key_pair" "dummy_public_key" {
  key_name   = var.key_pair_name
  public_key = tls_private_key.generated.public_key_openssh
}

/*
    vpc ( virtual private cloud ) : It works as data center of AWS Cloud provider, in this we create different different services
        such as 
            1. public and private subnet - we connect public and private subnet to route tables 
            2. route tables - route tables connect to internet gateway
            3. internet gateway - it allows internet to all the resources present in public subent through route tables
            4. CIDR Block - it used to allocate ip address and it is written like this "<ip-address>/<prefix-length>". if this /16 
                meanings first 2 octate will be used for network portion and last 2 octate will use for assigning ip address which will
                    be range between ( 0 - 255 )
*/

resource "aws_vpc" "test_vpc" {
  // 00001010 00000000 00000000 00000000 // 10.0.0.0/15
  cidr_block = "10.0.0.0/16" // means you vpc has 65,536 ip address available for your whole vpc and it can be divide into smaller subnets
  tags = {
    Name = "test_vpc"
  }
}

/*
   while assigning the "cidr_blocks" for the subnet, we need to ensure first, because cidr_block of subnet is subset of vpc cidr_block.
*/

resource "aws_subnet" "public_test_subnet" {
  vpc_id                  = aws_vpc.test_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = "true"

  tags = {
    Name = "public_test_subnet"
  }
}

resource "aws_subnet" "private_test_subent" {
  vpc_id            = aws_vpc.test_vpc.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "us-east-1a"

  tags = {
    Name = "private_test_subnet"
  }
}

resource "aws_internet_gateway" "test_internet_gateway" {
  vpc_id = aws_vpc.test_vpc.id

  tags = {
    Name = "test_internet_gateway"
  }
}

resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.test_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.test_internet_gateway.id
  }

  tags = {
    Name = "public_route_table"
  }

}

resource "aws_route_table_association" "pubic_subnet_route_table_association" {
  subnet_id      = aws_subnet.public_test_subnet.id
  route_table_id = aws_route_table.public_route_table.id
}


/*
  defining the security groups and access to inbound rule and outbound rule

    1. Inbound rule - meaning of this rule is if somebody tries to access the EC2 server from the outside, so we can make 
        restriction that which ports or which sources are allowes to access EC2 server or any AWS resources.

    2. Outbound rule - meaning of this rule if aws ec2 or any other resources tries to connect with external resources, than we 
        apply outbound rule. Maximum time it is all for the protcol and sources

*/

resource "aws_security_group" "security_group_for_traffic" {
  name        = "allow_traffic"
  description = "Allow inbound and outbound trafic"
  vpc_id      = aws_vpc.test_vpc.id

  tags = {
    Name = "security_group_traffic"
  }

  egress {
    from_port   = "0"
    to_port     = "0"
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "allow ssh"
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port = 22    // from_port = 0 meaning all the ports like 80, 443, 21, 22 , same for to_port 
    to_port   = 22    // if from_port = 80 and to_port = 80 meaning allowing only http port and protocal will be "tcp"
    protocol  = "tcp" // allow all the protocols like tcp, udp, icmp or others
  }
  ingress {
    description = "allow http"
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port = 80
    to_port   = 80
    protocol  = "tcp"
  }
  ingress {
    description = "allow https"
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port = 443
    to_port   = 443
    protocol  = "tcp"
  }
  ingress {
    description = "allow npm server traffic"
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port = 3000
    to_port   = 3000
    protocol  = "tcp"
  }
}

/*
    creating the ec2 server using above configuration 
*/

resource "aws_instance" "test_instance" {
  key_name                    = var.key_pair_name
  ami                         = data.aws_ami.ec2_ubuntu.id
  subnet_id                   = aws_subnet.public_test_subnet.id
  vpc_security_group_ids      = [aws_security_group.security_group_for_traffic.id]
  instance_type               = var.instance_type
  associate_public_ip_address = true
  connection { /* require for the remote-exec provisioner even if you have enabled the ssh into the firewall */
    type        = "ssh"
    user        = "ubuntu"
    private_key = file(local_file.storing_private_key_in_local_system.filename) // using file block we can read the content of the file
    host        = self.public_ip
  }

  provisioner "local-exec" {
    command = "chmod 400 ${local_file.storing_private_key_in_local_system.filename}"
  }

  /***
  provisioner "remote-exec" {
    inline = [
      "sudo apt-get update",
      "sudo apt install apache2 -y",
      "sudo systemctl start apache2"
    ]
  }

  ***/

  provisioner "file" {
    source      = "file-exe.txt"
    destination = "/tmp/file-exe.txt"

  }

  tags = {
    Name = "First-EC2-Server-using-Terraform"
  }
}

/*

  using the module block from the module folder

module "module" {
  source          = "./module"
  ami             = data.aws_ami.ec2_ubuntu.id
  subnet_id       = aws_subnet.public_test_subnet
  security_groups = aws_security_group.security_group_for_traffic
}

*/

/* 
  module to create s3 bucket to aws 
*/

# module "s3-bucket" {
#   source  = "terraform-aws-modules/s3-bucket/aws"
#   version = "4.6.0"
# }

/*
  local variable 
*/

# locals {
#   server_name = "ec2_${aws_instance.test_instance}_${var.instance_type}"
#   tags = "ec2servertest"
# }