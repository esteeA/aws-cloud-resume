# aws-cloud-resume

This repository contains a sample solution for the AWS Cloud Resume Challenge using Terraform to manage infrastructure as code. The challenge demonstrates proficiency in AWS cloud technologies, including setting up a static website, integrating with AWS services, and managing infrastructure through Terraform.

## Overview
The [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/extensions/digital-ocean/) is a project designed to showcase your skills in cloud technologies by building and deploying a personal resume website using AWS. The website is deployed using S3, CloudFront, Lambda, API Gateway, DynamoDB, and Terraform for infrastructure management.

## Features
1. Static Resume Website: The resume is hosted as a static website in S3 and served through CloudFront.
2. View Counter: A serverless backend using Lambda, API Gateway, and DynamoDB tracks the number of visitors to the resume page.
3. Infrastructure as Code: All AWS resources are provisioned and managed using Terraform.
4. CI/CD: Automated deployment pipelines for continuous integration and delivery.
   
## Prerequisites
AWS Account: You need an active AWS account to deploy the infrastructure.
Terraform: Ensure you have Terraform installed on your machine. You can download it [here](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).
AWS CLI: Install and configure the AWS CLI with your credentials.
Git: Install Git for version control.

## Resources Created by Terraform
S3: For static website hosting.

CloudFront: To serve the website securely with caching.

API Gateway: Exposes the Lambda function to update the view count.

Lambda: A Python function that increments and retrieves the visitor count.

DynamoDB: Stores the number of visitors to the website.
