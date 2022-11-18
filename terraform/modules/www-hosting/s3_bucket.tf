# Project Files Storage
resource "aws_s3_bucket" "www_bucket" {
  bucket        = "www.commite.dev"
  force_destroy = true
}

resource "aws_s3_bucket_policy" "www_bucket_policy" {
  bucket = aws_s3_bucket.www_bucket.id
  policy = file("modules/www-hosting/templates/bucket_policy.json")
}

resource "aws_s3_bucket_website_configuration" "www_bucket_conf" {
  bucket = aws_s3_bucket.www_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_versioning" "www_bucket_versioning" {
  bucket = aws_s3_bucket.www_bucket.id

  versioning_configuration {
    status = "Disabled"
  }
}
