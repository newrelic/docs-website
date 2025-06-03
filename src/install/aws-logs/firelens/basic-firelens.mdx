---
componentType: default
headingText: Configure the FireLens log router container 
---

New Relic uses a Fluent Bit image to configure the FireLens log router container. This container handles all log routing from application plugins.

To forward your logs from FireLens to New Relic:

1. Add a sidecar container to your pre-existing ECS task definition that will act as the Firelens log router. For help configuring ECS log routing, see the [Amazon ECS documentation for custom log routing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).
2. Substitute the recommended images with the New Relic Fluent Bit output plugin image for your AWS region. You can find a list of these in the collapser below.
3. Set the [`memoryReservation` attribute](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definition_memory) for this container.

<CollapserGroup>
  <Collapser
    id="image-names"
    title="AWS region image names"
  >
    <table>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>
            AWS region
          </th>

          <th>
            Full image name
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            ap-northeast-1
          </td>

          <td>
            `533243300146.dkr.ecr.ap-northeast-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            ap-northeast-2
          </td>

          <td>
            `533243300146.dkr.ecr.ap-northeast-2.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            ap-northeast-3
          </td>

          <td>
            `533243300146.dkr.ecr.ap-northeast-3.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            ap-south-1
          </td>

          <td>
            `533243300146.dkr.ecr.ap-south-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            ap-southeast-1
          </td>

          <td>
            `533243300146.dkr.ecr.ap-southeast-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            ap-southeast-2
          </td>

          <td>
            `533243300146.dkr.ecr.ap-southeast-2.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            ca-central-1
          </td>

          <td>
            `533243300146.dkr.ecr.ca-central-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            eu-central-1
          </td>

          <td>
            `533243300146.dkr.ecr.eu-central-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            eu-north-1
          </td>

          <td>
            `533243300146.dkr.ecr.eu-north-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            eu-west-1
          </td>

          <td>
            `533243300146.dkr.ecr.eu-west-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            eu-west-2
          </td>

          <td>
            `533243300146.dkr.ecr.eu-west-2.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            eu-west-3
          </td>

          <td>
            `533243300146.dkr.ecr.eu-west-3.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            sa-east-1
          </td>

          <td>
            `533243300146.dkr.ecr.sa-east-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            us-east-1
          </td>

          <td>
            `533243300146.dkr.ecr.us-east-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            us-east-2
          </td>

          <td>
            `533243300146.dkr.ecr.us-east-2.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            us-west-1
          </td>

          <td>
            `533243300146.dkr.ecr.us-west-1.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>

        <tr>
          <td>
            us-west-2
          </td>

          <td>
            `533243300146.dkr.ecr.us-west-2.amazonaws.com/newrelic/logging-firelens-fluentbit`
          </td>
        </tr>
      </tbody>
    </table>
  </Collapser>
</CollapserGroup>

The example below will pin the 1.17.1 version so the task defintion is always deployed with that image version:

```json
{
  "essential": true,
  // Image below is New Relic's Fluent Bit output plugin available on ECR
  "image": "533243300146.dkr.ecr.us-east-2.amazonaws.com/newrelic/logging-firelens-fluentbit:1.17.1",
  "name": "log_router",
  "firelensConfiguration": {
    "type": "fluentbit",
    "options": {
      "enable-ecs-log-metadata": "true"
    }
  }
}
```
