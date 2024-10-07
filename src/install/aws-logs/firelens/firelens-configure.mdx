---
componentType: default
headingText: Configure the application container
---

Select a configuration option:

<CollapserGroup>
  <Collapser
    id="secrets"
    title="AWS Secrets Manager (recommended)"
  >
    To prevent exposing your New Relic <InlinePopover type="licenseKey"/> in your task definition, we strongly recommend using the [AWS Secrets Manager](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html) service.

    When adding the secret, use the <DNT>**Plaintext**</DNT> tab. Once you've added the secret to the Secrets Manager, you can then reference it using the `logConfiguration` block, replacing `SECRET_NAME` with the name of your AWS secret. For example:

    ```json
    "logConfiguration": {
      "logDriver":"awsfirelens",
      "options": {
        "Name": "newrelic"
      },
      "secretOptions": [{
        "name": "apiKey",
        "valueFrom": "arn:aws:secretsmanager:region:aws_account_id:secret:SECRET_NAME"
      }]
    }
    ```
  </Collapser>

  <Collapser
    id="plaintext"
    title="Plaintext key configuration"
  >
    Use the `logConfiguration` block, replacing `INSERT_API_KEY` with your New Relic <InlinePopover type="licenseKey"/>. For configuration details, see the [FireLens task definitions on GitHub](https://github.com/aws-samples/amazon-ecs-firelens-examples).

    ```json
    "logConfiguration": {
      "logDriver":"awsfirelens",
      "options": {
        "Name": "newrelic",
        "apiKey": "NEW_RELIC_LICENSE_KEY"
      }
    ```
  </Collapser>
</CollapserGroup>

### Example configurations [#example-config]

<CollapserGroup>
  <Collapser
    id="firelens-example"
    title="Fargate example task definition configuration"
  >
    Example task definition for a basic NGINX server:

    ```json
    {
      "family": "newrelic-firelens",
      "networkMode": "awsvpc",
      "requiresCompatibilities": [
        "FARGATE"
      ],
      "containerDefinitions": [
        // FireLens log router container
        {
          "essential": true,
          // Image below is New Relic's Fluent Bit output plugin available on ECR
          "image": "533243300146.dkr.ecr.us-east-2.amazonaws.com/newrelic/logging-firelens-fluentbit",
          "name": "log_router",
          "firelensConfiguration": {
            "type": "fluentbit",
            "options": {
              "enable-ecs-log-metadata": "true"
            }
          }
        },
        // Application container
        {
          "essential": true,
          "name": "webserver",
          // Application image goes here
          "image": "nginx",
          "cpu": 512,
          "memoryReservation": 1024,
          "portMappings": [{
            "containerPort": 5000
          }],
          "environment": [{
            "name": "VERSION",
            "value": "V1"
          }],
          // New Relic Fluent Bit output configuration
          "logConfiguration": {
            "logDriver":"awsfirelens",
            "options": {
              "Name": "newrelic"
            },
            "secretOptions": [{
              "name": "apiKey",
              "valueFrom": "arn:aws:secretsmanager:region:aws_account_id:secret:secret_name-AbCdEf"
            }]
          }
        }
      ],
      // Use your own role here
      "executionRoleArn": "arn:aws:iam::XXXXXXXXXXXX:role/ecsTaskExecutionRole",
      "taskRoleArn": "arn:aws:iam::XXXXXXXXXXXX:role/ecsTaskExecutionRole",
      "cpu": "1 vcpu",
      "memory": "2 gb"
    }
    ```
  </Collapser>

  <Collapser
    id="ec2-example"
    title="EC2 example task definition configuration"
  >
    Example task definition for a basic NGINX server:

    ```json
    {
      "family": "newrelic-firelens",
      "networkMode": "bridge",
      "requiresCompatibilities": [
        "EC2"
      ],
      "containerDefinitions": [
        // FireLens log router container
        {
          "essential": true,
          // Image below is New Relic's Fluent Bit output plugin available on ECR
          "image": "533243300146.dkr.ecr.us-east-2.amazonaws.com/newrelic/logging-firelens-fluentbit",
          "name": "log_router",
          "memoryReservation": 50,
          "firelensConfiguration": {
            "type": "fluentbit",
            "options": {
              "enable-ecs-log-metadata": "true"
            }
          }
        },
        // Application container
        {
          "essential": true,
          "name": "webserver",
          // Application image goes here
          "image": "nginx",
          "cpu": 512,
          "memoryReservation": 1024,
          "portMappings": [{
            "containerPort": 5000
          }],
          "environment": [{
            "name": "VERSION",
            "value": "V1"
          }],
          // New Relic Fluent Bit output configuration
          "logConfiguration": {
            "logDriver":"awsfirelens",
            "options": {
              "Name": "newrelic"
            },
            "secretOptions": [{
              "name": "apiKey",
              "valueFrom": "arn:aws:secretsmanager:region:aws_account_id:secret:secret_name-AbCdEf"
            }]
          }
        }
      ],
      // Use your own role here
      "executionRoleArn": "arn:aws:iam::XXXXXXXXXXXX:role/ecsTaskExecutionRole",
      "taskRoleArn": "arn:aws:iam::XXXXXXXXXXXX:role/ecsTaskExecutionRole",
      "cpu": "1 vcpu",
      "memory": "2 gb"
    }
    ```
  </Collapser>
</CollapserGroup>
