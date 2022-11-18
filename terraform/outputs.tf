output "ssl_domain_name" {
  value = module.ssl.ssl_domain_name
}

# output "cert" {
#   value = module.ssl.ssl_record_values[*]
# }

output "ssl_certificate_arn" {
  value = module.ssl.ssl_certificate_arn
}
