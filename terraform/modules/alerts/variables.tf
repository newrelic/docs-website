variable "application_id" {
  type        = number
  description = "The Browser appliation ID (under the DevEn account)"
}

variable "synthetics_id" {
  type        = number
  description = "Sythentics monitor for docs.newrelic.com"
}

variable "page_load_warning" {
  type        = number
  description = "Warning when page load gets above x sec"
}

variable "page_load_critical" {
  type        = number
  description = "Alert when page load gets above x sec"
}

variable "apdex_warning" {
  type        = number
  description = "Warning when apdex gets below x"
}

variable "apdex_critical" {
  type        = number
  description = "Alert when apdex gets below x"
}

variable "js_errors_warning" {
  type        = number
  description = "Warning when x unique sessions gets above x"
}

variable "js_errors_critical" {
  type        = number
  description = "Alert when x unique sessions gets above x"
}
