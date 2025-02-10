---
title: IAST configuration
tags:
    - IAST
    - New Relic IAST
    - Configuration
metaDescription: Find out how to configure IAST.
freshnessValidatedDate: 2024-09-16
---

You can configure your IAST to handle scan scheduling. These configurations allow you to exclude certain APIs, parameters, and vulnerability categories from IAST analysis. You can also delay IAST scans or schedule them for specific times of the day.

## Scheduling IAST scans [#scheduling-iast-scans]

You can start and stop your scheduled IAST scans using 2 variables. These variables allow you to set specific times for the IAST scan or add a delay to the IAST scan start time from the application.


### Configure your scheduled IAST scans [#configure-scheduled]

Open the `newrelic.yml` configuration file to set the `scan_schedule` parameters.

```yml
security:
  scan_schedule:
    delay: 0                     # In minutes, default is 0 min
    duration: 0                  # In minutes, default is forever
    schedule: ""                 # Cron Expression to define start time
    always_sample_traces: false  # regardless of scan schedule
```

<CollapserGroup>
    <Collapser
        id="delay"
        title={<><InlineCode>delay</InlineCode> (in minutes)</>}
    >
        The `delay` field specifies the time in minutes before an IAST scan begins after the application starts. The default value is `0`.

    </Collapser>
    <Collapser
        id="duration"
        title={<><InlineCode>duration</InlineCode> (in minutes)</>}
    >
        The `duration` field specifies the length of time in minutes that the IAST scan will run. The default value is forever, it has no limits.

        For example, if you set `duration: 300`, the IAST scan will run for 300 minutes (5 hours).

    </Collapser>
    <Collapser
        id="schedule-cron"
        title={<><InlineCode>schedule</InlineCode> (Cron expression)</>}
    >
        The `schedule` field specifies a cron expression that defines when the IAST scan should run. By default, `schedule` is disabled. The [cron expression](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) consists of six fields separated by spaces:

        * **second**: Specifies the second of the hour (0-59) 
        * **minute**: Specifies the minute of the hour (0-59)
        * **hour**: Specifies the hour of the day (0-23)
        * **day**: Specifies the day of the month (1-31)
        * **month**: The month of the year (1-12 or JAN-DEC)
        * **day_of_week**: Specifies the day of the week (1-7 or SUN-SAT), where 1 = Sunday

        <Callout variant="important">
          What happens if `duration` is not specified? Omitting the duration parameter implies that the IAST scan should never stop. In this scenario, the specified schedule is treated as a start time rather than a recurring operation. The scan will continue indefinitely without interruption or termination. For example, `schedule: "0 0 0 * * ?"` would schedule the IAST scan to run at 12am every day.
        </Callout>

    </Collapser>
    <Collapser
        id="always-sample-traces"
        title={<><InlineCode>always_sample_traces</InlineCode> (Boolean)</>}
    >
        `always-sample-traces` allows IAST to actively collect trace data in the background, and the security agent will use this collected data to perform an IAST scan at the scheduled time. However, for applications with session management, leaving the default value of the `always_sample_traces` flag set to `false` is the recommended option. This ensures that IAST sampling and scanning is limited to a specified window. Sessions typically have a short lifetime, often ending within 30 minutes. In this scenario, sampling traces before the window will not provide valuable insight and may result in missed vulnerabilities. By default, the value of `always_sample_traces` is false.

    </Collapser>
</CollapserGroup>


### Examples [#configure-scheduled-examples]

<CollapserGroup>
    <Collapser
        id="start-30-minutes"
        title="Schedule IAST to start 30 minutes after the application starts and run for 300 minutes"
    >
        To schedule IAST to start 30 minutes after the application starts and run for 300 minutes, you should set the delay to 30 and the duration to 300.

        ```yml
        security:
          scan_schedule:
            delay: 30         # In minutes, default is 0 min
            duration: 300     # In minutes, default is forever
        ```
    </Collapser>
    <Collapser
        id="specific-time"
        title="Schedule IAST to run at a specific time"
    >
        To schedule IAST to run at a specific time, set the schedule to a cron expression that represents the desired time. For example, to schedule the IAST to run every day at midnight, you would set the schedule to `"0 0 0 * * ?"`.

        ```yml
        security:
          scan_schedule:
            schedule: "0 0 0 * * ?"     # By default, schedule is inactive
        ```

        <Callout variant="important">
          If both delay and schedule are specified, the delay takes precedence. This means that the IAST will start after the specified delay, regardless of the schedule.
        </Callout>

    </Collapser>
    <Collapser
        id="iast-sample-traces"
        title="Set IAST to always sample traces"
    >
        If you want IAST to always sample traces, you would set `always_sample_traces` to `true`. By default, this is set to `false`, which means that IAST only samples traces within the active scan window.

        ```yml
        security:
          scan_schedule:
            delay: 30                   # In minutes, default is 0 min
            always_sample_traces: true  # regardless of scan schedule
        ```

    </Collapser>
</CollapserGroup>


## Exclude from IAST scan [#exclude-iast-scans]

The exclude from IAST scan setting allows you to exclude specific APIs, vulnerability categories, and parameters from IAST analysis. This is useful in situations where certain components of the application are known to be secure, or where IAST scanning of certain APIs could result in application malfunction, such as login throttling.

To configure IAST scan exclusion, open the `newrelic.yml` configuration file to set the `exclude_from_iast_scan` parameter.

```yml
security:
  exclude_from_iast_scan:
    api: []
    http_request_parameters:
      header: []
      query: []
      body: []
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: false
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: false
      rxss: false
```

### Exclude API [#exclude-api]

You can ignore specific APIs from IAST analysis by adding them to the API section of the `newrelic.yml` configuration file. You can specify APIs using regular expression (regex) patterns that follow the syntax of Perl 5. The regex pattern should provide a full match for the URL without the endpoint.

This is the format for specifying APIs:

```yml
exclude_from_iast_scan:
  api:
    - .*account.* 
    - .*/\api\/v1\/.*?\/login
```

For example:
* `.*account.*` matches APIs with URLs like `http://localhost:80/api/v1/account/login`

* `.*/\api\/v1\/.*?\/login` matches APIs with URLs like `http://localhost:80/api/v1/{'{account_id}'}/login`


### Exclude `http_request_parameters` [#exclude-http]

You can ignore specific HTTP request parameters from IAST analysis by adding them to the `http_request_parameters` section of the `newrelic.yml` configuration file.

<CollapserGroup>
    <Collapser
        id="header"
        title="Header"
    >
    
    This is a list of HTTP header keys. If a request includes any headers with these keys, the corresponding IAST scan will be skipped. For example, if you have a curl request with headers and you want to skip IAST scanning on the `X-Forwarded-For` header, you can pass this configuration:

      ```bash
      curl -X POST -H "X-Forwarded-For: 123.456.789.012" \
           -H "Content-Type: application/x-www-form-urlencoded" \
           -d "param1=value1&param2=value2" http://example.com
      ```

    You can use this configuration:

      ```yml
      exclude_from_iast_scan:
        http_request_parameters:
          header: 
            - X-Forwarded-For
      ```

    </Collapser>
    <Collapser
        id="query"
        title="Query"
    >

    This is a list of query parameter keys. The presence of these parameters in the query string of the request will cause the IAST scan to be skipped. For example, if you have a curl request with query parameters and you want to skip IAST scanning on the `customerID` and `username` query parameters, you can pass this configuration:

      ```bash
      curl --location --request GET 'localhost:8080/sql/save?firstName=test&lastName=user&customerID=testuser&username=test123'
      ```

    You can use this configuration:

      ```yml
      exclude_from_iast_scan:
        http_request_parameters:
          query: 
            - username
            - customerID
      ```

    </Collapser>
    <Collapser
        id="body"
        title="Body"
    >
        
    This is a list of keys within the body of the request. If these keys are found in the body content, the IAST scan is skipped. These are the supported content types for the request body: JSON, XML, and Form-URL-Encoded data.

    #### Example for JSON Content-Type

    This is a curl example for JSON content type when you have a curl request with JSON body, and you want to skip IAST scanning on `customerID` and `firstName`.

      ```bash
      curl --location --request POST 'localhost:8080/application/json/post' \
        --header 'Content-Type: application/json' \
        --data '{
          "path": "sample.txt",
          "script":"testscript",
          "customerID":"GREAL",
          "name": {
            "firstName": "john",
            "lastName": "wick"
          },
          "url":"http://example.com",
          "cmd":"ls"
        }'
      ```

    You can use this configuration:

      ```yml
      exclude_from_iast_scan:
        http_request_parameters:
          body: 
            - customerID
            - name.firstName
      ```

    #### Example for XML Content-Type

    This is a curl request with XML body, and you want to skip IAST scanning on `customerID` and `username`.

      ```bash
      curl --location 'localhost:8080/application/xml/post' \
        --header 'Content-Type: application/xml' \
        --data '<?xml version="1.0" encoding="UTF-8" ?>
        <AppData>
          <path>sample.txt</path>
          <script>K2</script>
          <customerID>GREAL</customerID>
          <username>bob</username>
          <url>http://example.com</url>
          <cmd>ls</cmd>
          <name>keshav</name>
          <firstName>Aliko</firstName>
        </AppData>'
      ```

      You can use this configuration:

      ```yml
      exclude_from_iast_scan:
        http_request_parameters:
          body: 
            - AppData.customerID
            - AppData.username
      ```

    #### Example Form-URL-Encoded Content-Type

    This is a curl request with Form-URL-Encoded body, and you want to skip IAST scanning on `customerID` and `username`.

    ```bash
    curl --location 'localhost:8080/application/urlencode/post' \
      --header 'Content-Type: application/x-www-form-urlencoded' \
      -d 'name=madhav&path=sample.txt&customerID=GREAL&script=K2&url=http://example.com&username=bob&firstName=Aliko&cmd=ls'
    ```

    You can use this configuration:

      ```yml
      http_request_parameters:
        body: 
          - customerID
          - username
      ```

    <Callout variant="tip">
      For nested body parameters, specify a parameter value separated by a period (.).
    </Callout>

    </Collapser>
</CollapserGroup>


### Exclude `iast_detection_category` [#exclude-iast-detection]

The `iast_detection_category` setting allows users to specify categories of vulnerabilities for which IAST analysis will be applied or ignored. If one of these categories is set to `true`, the IAST security agent will not generate events or flag vulnerabilities for that category.

See this example to skip scanning for SQL Injection and SSRF. The `sql_injection` and `ssrf` parameters are set to `true`:

  ```yml
  exclude_from_iast_scan:
    iast_detection_category:
      insecure_settings: false
      invalid_file_access: false
      sql_injection: true
      nosql_injection: false
      ldap_injection: false
      javascript_injection: false
      command_injection: false
      xpath_injection: false
      ssrf: true
      rxss: false
  ```

<Callout variant="tip">
  The `iast_detection_category` will be prioritized over detection config present in security section.
</Callout>

You can use this combined configuration:

  ```yml
  security:
    enabled: true
    scan_schedule:
      delay: 0                     # In minutes, default is 0 min
      duration: 0                  # In minutes, default will be forever
      #schedule: ""                # Cron Expression to define start time
      always_sample_traces: false  # continuously collect samples
    exclude_from_iast_scan:
      api: []
      http_request_parameters:
        header: []
        query: []
        body: []
      iast_detection_category:
        insecure_settings: false
        invalid_file_access: false
        sql_injection: false
        nosql_injection: false
        ldap_injection: false
        javascript_injection: false
        command_injection: false
        xpath_injection: false
        ssrf: false
        rxss: false
    agent:
      enabled: true
  ```

## IAST scan controllers [#iast-scan-controllers]


### IAST scan rate limit [#iast-scan-rate-limit]

IAST scan rate limit settings limit the maximum number of analysis probes or requests that can be sent to the application in one minute. The default IAST scan rate limit is set to a minimum of 12 replay requests per minute and a maximum of 3,600 replay requests per minute.
