output "ssl_domain_name" {
  value = aws_acm_certificate.commite_ssl.domain_name
}

# output "ssl_record_values" {
#   value = [tolist(aws_acm_certificate.commite_ssl[each.key].domain_validation_options)[0].resource_record_value]
# }

output "ssl_certificate_arn" {
  value = aws_acm_certificate.commite_ssl.arn
}
