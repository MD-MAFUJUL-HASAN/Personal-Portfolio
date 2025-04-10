/*
    Use the output resource block to display configuration information.
*/

output "expose_public_ip_address" {
  description = "expose the public ip address of newly created ec2 instance"
  value       = aws_instance.test_instance.public_ip
}

output "expose_security_group_id" {
  description = "check the security group id"
  value       = aws_security_group.security_group_for_traffic.id
}

output "expose_key_pair_name" {
  description = "expose the key pair for the newly created ec2 instance"
  value       = aws_instance.test_instance.key_name
}
