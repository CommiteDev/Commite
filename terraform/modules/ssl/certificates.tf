resource "aws_acm_certificate" "commite_ssl" {
  provider                  = aws.us-east-1
  domain_name               = "www.commite.dev"
  subject_alternative_names = ["commite.dev", "*.commite.dev"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
