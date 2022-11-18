# Terraform State Storage
resource "aws_s3_bucket" "commite_tf_state" {
  bucket        = "commite-tf-state-bucket"
  force_destroy = true
}

resource "aws_s3_bucket_acl" "commite_tf_state_acl" {
  bucket = aws_s3_bucket.commite_tf_state.id
  acl    = "private"
}

resource "aws_s3_bucket_versioning" "commite_tf_state_versioning" {
  bucket = aws_s3_bucket.commite_tf_state.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "commite_tf_state_sse" {
  bucket = aws_s3_bucket.commite_tf_state.bucket

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
