resource "aws_cloudfront_distribution" "commite_cdn" {
  enabled             = true
  price_class         = "PriceClass_100"
  aliases             = ["www.commite.dev", "commite.dev"]
  default_root_object = "/index.html"
  is_ipv6_enabled     = true

  origin {
    domain_name = var.www_bucket_id
    origin_id   = var.www_bucket_id
  }

  default_cache_behavior {
    target_origin_id       = var.www_bucket_id
    viewer_protocol_policy = "redirect-to-http"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.ssl_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
