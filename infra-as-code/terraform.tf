/*
 This Terraform block is used globally across the "project" directory.  
 When running "terraform apply," it ensures that the required Terraform version  
 and provider configurations are fetched and used consistently throughout the directory.
*/

terraform {

  /* storing and managing the state file into s3 bucket */
  # backend "s3" {
  #   bucket = "demo-bucket-name"
  #   key    = "prod/aws_infra"
  #   region = "us-east-1"

  # dynamodb_table = "mytestdynamodbtable"
  # encrypt = true
  # }
  required_version = ">=1.11.2"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=5.92.0"
    }

    tls = {
      source  = "hashicorp/tls"
      version = "4.0.6"
    }

    local = {
      source  = "hashicorp/local"
      version = "2.5.2"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  default_tags {
    tags = {
      Environment = terraform.workspace
    }
  }
}
