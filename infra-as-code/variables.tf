variable "key_pair_name" {
  type        = string
  description = "defining the key pair name to login into ec2 instance"
  default     = "MyEC2InstanceLoginKey"
}

variable "instance_type" {
  type    = string
  default = "t2.micro"
}