terraform {
  required_version = ">= 0.13"

  backend "s3" {
    bucket         = "commite-tf-state-bucket"
    key            = "terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "commite-tf-state-lock"
    encrypt        = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.25.0"
    }
  }
}

provider "aws" {
  region = var.AWS_SELECTED_REGION

  default_tags {
    tags = {
      CreatedBy   = "Terraform"
      Project     = "Commite.dev"
      Environment = "Production"
    }
  }
}

# module "remote-backend" {
#   source = "./modules/remote-backend"
# }

module "www-hosting" {
  source = "./modules/www-hosting"
}

module "ssl" {
  source = "./modules/ssl"
}

module "cdn" {
  source = "./modules/cdn"

  www_bucket_id       = module.www-hosting.www_bucket_id
  ssl_certificate_arn = module.ssl.ssl_certificate_arn
}
