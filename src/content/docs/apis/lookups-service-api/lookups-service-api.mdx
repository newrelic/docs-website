---
title: NRQL Lookups API
tags:
  - APIs
  - Lookups Service REST API
  - NRQL Lookups API
  - lookup
metaDescription: 'Use the NRQL Lookups API to create and manage lookup tables.'
redirects:
  - /docs/apis/lookup-service-api/lookup-service-api
freshnessValidatedDate: 2023-09-18
---

Use the NRQL Lookups API to create and manage [lookup tables](/docs/logs/ui-data/lookup-tables-ui/#overview).

## Before you start

The NRQL Lookups API is a REST API that allows you to manage lookup tables programmatically. As another option you can also [manage lookup tables through our UI](/docs/logs/ui-data/lookup-tables-ui/#lookup-ui).

## HTTP endpoints [#http-endpoints]

### Base URL

Use the base URL that's applicable for your New Relic account in your API calls.

United States (US) endpoint:

```
https://nrql-lookup.service.newrelic.com
```

[European Union](/docs/using-new-relic/welcome-new-relic/get-started/introduction-eu-region-data-center) (EU) endpoint:

```
https://nrql-lookup.service.eu.newrelic.com
```

### Endpoints

<table>
  <thead>
    <tr>
      <th style={{ width: "150px" }}>
        Method
      </th>

      <th>
        Endpoint
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [`create`](#create-and-update)
      </td>

      <td>
        `POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Upload a new table.
      </td>
    </tr>

    <tr>
      <td>
        [`update`](#create-and-update)
      </td>

      <td>
        `PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Replace an existing table.
      </td>
    </tr>

    <tr>
      <td>
        [`read`](#read)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Download a table that was previously uploaded.
      </td>
    </tr>

    <tr>
      <td>
        [`delete`](#delete)
      </td>

      <td>
        `DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`
      </td>

      <td>
        Delete the given table.
      </td>
    </tr>

    <tr>
      <td>
        [`list`](#list)
      </td>

      <td>
        `GET /v1/accounts/YOUR_ACCOUNT_ID`
      </td>

      <td>
        List the tables previously updated for this account.
      </td>
    </tr>
  </tbody>
</table>

The variables required in the above NRQL Lookups API endpoints are defined below.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Variable
      </th>

      <th style={{ width: "200px" }}>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `YOUR_ACCOUNT_ID`
      </td>

      <td>
        `number`
      </td>

      <td>
        The account to which the table belongs
      </td>
    </tr>

    <tr>
      <td>
        `TABLE_NAME`
      </td>

      <td>
        `string`
      </td>

      <td>
        A name for the stored table.  Table names must comply with the [custom event type standards](/docs/data-apis/custom-data/custom-events/data-requirements-limits-custom-event-data/#general):

        * Maximum length: 255
        * Can be a combination of alphanumeric characters, underscores, and colons.
      </td>
    </tr>
  </tbody>
</table>

## Authentication

Your <InlinePopover type="userKey"/> serves to authenticate your request to the NRQL Lookups API and needs to be passed as an HTTP header.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Header
      </th>

      <th>
        Supported values
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Api-Key`
      </td>

      <td>
        A New Relic <InlinePopover type="userKey"/>.
      </td>
    </tr>
  </tbody>
</table>

## Create/Update a Table [#create-and-update]

### HTTP Endpoints [#create-and-update-http-endpoints]

#### Create

`POST /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Used to upload a new table. The table cannot already exist. If it does, this call will result in a `400 Bad Request` response.

#### Update

`PUT /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Used to replace an existing table. If the table does not exist this call will result in a `404 Not Found` response.

#### Request Query Parameters

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Name
      </th>

      <th>
        Type
      </th>

      <th>
        Default
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indicates whether to include the table value in the response.
      </td>
    </tr>
  </tbody>
</table>

### HTTP Headers [#create-http-headers]

When creating your HTTP headers, use these guidelines:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Header
      </th>

      <th>
        Supported values
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Content-Type`
      </td>

      <td>
        * `multipart/form-data`
        * `application/json`
      </td>
    </tr>

    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Request Body [#create-request-body]

The data you send in your request body can either be `multipart/form-data` or `application/json`.

<CollapserGroup>
  <Collapser
    id="multipart-form-data-request"
    title="Request with multipart/form-data"
  >
    #### Supported Fields

    You can provide the following fields in your create and update requests when sending `multipart/form-data` content:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Field
          </th>

          <th style={{ width: "200px" }}>
            Value Type
          </th>

          <th>
            Required
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            CSV file
          </td>

          <td>
            Yes
          </td>

          <td>
            Multipart form-data part that contains the CSV content. Our CSV parsing logic is outlined in detail [here](/docs/logs/ui-data/lookup-tables-ui/#valuetypes).
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            No
          </td>

          <td>
            Second multipart form-data part that contains a description of the table.
          </td>
        </tr>
      </tbody>
    </table>

    #### Example payload

    ```
    --__X_BOUNDARY__
    Content-Disposition: form-data; name="table"; filename="sample.csv"
    Content-Type: text/csv

    id,name,intvalue,floatvalue,boolvalue
    '1,abc,27,2.7,true
    '2,def,2622,26.22,false
    '2a,"g,hi",1234,43.21,false
    --__X_BOUNDARY__--
    Content-Disposition: form-data; name="description"

    A description of the table
    --__X_BOUNDARY__--
    ```
  </Collapser>

  <Collapser
    id="application-json-request"
    title="Request with application/json"
  >
    #### Supported Fields

    You can provide the following fields in your create and update when sending `application/json` content:

    <table>
      <thead>
        <tr>
          <th style={{ width: "200px" }}>
            Field
          </th>

          <th style={{ width: "200px" }}>
            Value Type
          </th>

          <th>
            Required
          </th>

          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            `table`
          </td>

          <td>
            `JSON`
          </td>

          <td>
            Yes
          </td>

          <td>
            <table>
              <tr>
                <td style={{ width: "200px" }}>
                  `headers`
                </td>

                <td>
                  An array of `string` values representing the column names of the table
                </td>
              </tr>

              <tr>
                <td style={{ width: "200px" }}>
                  `rows`
                </td>

                <td>
                  An array of arrays, representing the values of the table. All values must be a `string`, `number`, or `boolean` values. (Complex JSON objects are not allowed.)
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td>
            `description`
          </td>

          <td>
            `string`
          </td>

          <td>
            No
          </td>

          <td>
            A detailed description of the table
          </td>
        </tr>
      </tbody>
    </table>

    #### Example payload

    ```json
    {
           "table": {
               "headers": [
               "id", "name", "intvalue", "floatvalue", "boolvalue"
               ],
               "rows": [
                   ["1", "abc", 27, 2.7, true],
                   ["2", "def", 2622, 26.22, false],
                   ["2a", "d,ef", 1234, 43.21, false]
               ]
           },
           "description": "This is a description."
       }
    ```
  </Collapser>
</CollapserGroup>

### Response Body [#create-update-response]

If the request is successful, the response JSON payload can include the following fields:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Field
      </th>

      <th style={{ width: "200px" }}>
        Value Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        The account to which the table belongs. This will match the account value in the path.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        A name for the stored table. This will match the name value in the path.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        A detailed description of the table
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        The guid assigned to the table upon creation.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        Size of the table as a CSV string.
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        The number of rows in the table (excluding the header row)
      </td>
    </tr>

    <tr>
      <td>
        `updatedBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        The username/email address of the last user that created or last updated this table.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        The timestamp of when the table was created or last updated. This will reflect the last updated timestamp of the S3 object. The value will be a standard ISO 8601 date time string (ex. 2023-02-13T19:49:28.023Z)
      </td>
    </tr>

    <tr>
      <td>
        `table`
      </td>

      <td>
        `JSON` object literal
      </td>

      <td>
        <table>
          <tr>
            <td style={{ width: "200px" }}>
              `headers`
            </td>

            <td>
              An array of `string` values representing the column names of the table
            </td>
          </tr>

          <tr>
            <td style={{ width: "200px" }}>
              `rows`
            </td>

            <td>
              An array of arrays, representing the values of the table.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table>

#### Example Response JSON payload

```json
{
  "accountId": YOUR_ACCOUNT_ID,
  "name": "sample",
  "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
  "size": 120
  "rows": 3
  "updatedBy": "jondoe@example.com"
  "updatedAt": "2023-02-13T19:49:28.023Z",
  "table": {
    "headers": [
      "id", "name", "description", "intvalue", "floatvalue", "boolvalue"
    ],
    "rows": [
      [1, "abc", 27, 2.7, true],
      [2, "def", 2622, 26.22, false],
      ["2a", "d,ef", 1234, 43.21, false]
    ]
  }
}
```

### Example Requests

<CollapserGroup>
  <Collapser
    id="create-a-new-table"
    title="Create a new table"
  >
    To create a new lookup table, we can send a POST request to the create endpoint with a JSON payload describing the lookup table.

    Here's an example `curl` command:

    ```bash
      curl -X "POST" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
          -H 'Content-Type: application/json' \
          -H 'Api-Key: YOUR_USER_KEY'\
          -d $'{
      "table": {
      "headers": ["id", "name", "intvalue", "floatvalue", "boolvalue"],
      "rows": [
          ["1", "abc", 27, 2.7, true],
          ["2", "def", 2622, 26.22, false]
      ]
      },
      "description": "This is a description."
      }'
    ```
  </Collapser>

  <Collapser
    id="update-a-table"
    title="Update an existing table"
  >
    To replace an existing lookup table, we can send a PUT request to the update endpoint with a `multipart/form-data` request body containing the new table.

    ```bash
    curl -X "PUT" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Api-Key: YOUR_USER_KEY'\
       -H 'Content-Type: multipart/form-data; charset=utf-8; boundary=__X_PAW_BOUNDARY__' \
       -F "table=id,name,description,intvalue,floatvalue,boolvalue
          1,abc,desc1,27,2.7,true
          2,def,desc2,2622,26.22,false
          " \
       -F "description=This is a description."
    ```
  </Collapser>
</CollapserGroup>

## Read a Table [#read]

### HTTP Endpoint [#read-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Used to download a table that was previously uploaded. If the table does not exist this call will result in a `404 Not Found` response. This endpoint has no request payload.

#### Request Query Parameters

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Name
      </th>

      <th style={{ width: "150px" }}>
        Type
      </th>

      <th>
        Default
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indicates whether to include the table value in the response. Ignored when the content type is `text/csv`.
      </td>
    </tr>
  </tbody>
</table>

### HTTP Headers [#read-headers]

When creating your HTTP headers, use these guidelines:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Header
      </th>

      <th>
        Supported values
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
        * `text/csv`
      </td>
    </tr>
  </tbody>
</table>

### Response Body [#read-response-body]

If the request is successful, the response can either be of type `application/json` or `text/csv`.

#### Response with `application/json` type

The response will be the same as the [create/update response payload](#create-update-response).

#### Response with `text/csv` type

The response will contain the table in CSV format.

### Example Requests [#read-example-requests]

<Collapser
  id="download-an-existing-table"
  title="Download an existing table"
>
  To download a table that was previously uploaded, we can send a GET request to the update endpoint.

  Here's an example `curl` command:

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  Here's an example `text/csv` response:

  ```csv
  id,name,intvalue,floatvalue,boolvalue
  '1,abc,27,2.7,true
  '2,def,2622,26.22,false
  '2a,"g,hi",1234,43.21,false
  ```
</Collapser>

## Delete a Table [#delete]

### HTTP Endpoint [#delete-endpoint]

`DELETE /v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME`

Used to delete the given table. If the table does not exist this call will result in a `404 Not Found` response. This endpoint has no request payload.

<Callout variant="important">
  Deleted tables are not recoverable.
</Callout>

#### Request Query Parameters

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Name
      </th>

      <th>
        Type
      </th>

      <th>
        Default
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `includeTable`
      </td>

      <td>
        `boolean`
      </td>

      <td>
        `false`
      </td>

      <td>
        Indicates whether to include the table value in the response.
      </td>
    </tr>
  </tbody>
</table>

### HTTP Headers [#delete-headers]

When creating your HTTP headers, use these guidelines:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Header
      </th>

      <th>
        Supported values
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Response Body [#delete-response-body]

If the request is successful and the `Accept` header is set to `application/json`, the response body will be the same as the [create/update response payload](#create-update-response).

### Example Requests [#delete-example-request]

<Collapser
  id="delete-an-existing-table"
  title="Delete an existing table"
>
  To delete a table that was previously uploaded, we can send a DELETE request to the delete endpoint.

  Here's an example `curl` command:

  ```bash
  curl -X "DELETE" "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID/TABLE_NAME" \
       -H 'Accept: application/json' \
       -H 'Api-Key: YOUR_USER_KEY'\
  ```
</Collapser>

## List Tables [#list]

### HTTP Endpoint [#list-endpoint]

`GET /v1/accounts/YOUR_ACCOUNT_ID`

Lists the tables previously updated for this account. This endpoint has no request payload.

### HTTP Headers [#list-headers]

When creating your HTTP headers, use these guidelines:

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Header
      </th>

      <th>
        Supported values
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `Accept`
      </td>

      <td>
        * `application/json`
      </td>
    </tr>
  </tbody>
</table>

### Response Body [#list-response-body]

If the request is successful, the response JSON payload will consist of an array of table summaries. Each table summary can include the fields below.

<table>
  <thead>
    <tr>
      <th style={{ width: "200px" }}>
        Field
      </th>

      <th style={{ width: "200px" }}>
        Value Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `accountId`
      </td>

      <td>
        `number`
      </td>

      <td>
        The account to which the table belongs. This will match the account value in the path.
      </td>
    </tr>

    <tr>
      <td>
        `name`
      </td>

      <td>
        `string`
      </td>

      <td>
        A name for the stored table. This will match the name value in the path.
      </td>
    </tr>

    <tr>
      <td>
        `description`
      </td>

      <td>
        `string`
      </td>

      <td>
        A more detailed description of the table
      </td>
    </tr>

    <tr>
      <td>
        `guid`
      </td>

      <td>
        `string`
      </td>

      <td>
        The guid assigned to the table upon creation.
      </td>
    </tr>

    <tr>
      <td>
        `size`
      </td>

      <td>
        `number`
      </td>

      <td>
        The size of the table as a CSV string.
      </td>
    </tr>

    <tr>
      <td>
        `rows`
      </td>

      <td>
        `number`
      </td>

      <td>
        The number of rows in the table (excluding the header row)
      </td>
    </tr>

    <tr>
      <td>
        `updateBy`
      </td>

      <td>
        `string`
      </td>

      <td>
        The username/email address of the last user that updated this table.
      </td>
    </tr>

    <tr>
      <td>
        `updatedAt`
      </td>

      <td>
        `string`
      </td>

      <td>
        The timestamp of when the table was created or last updated. This will reflect the last updated timestamp of the S3 object. The value will be a standard ISO 8601 date time string (ex. 2023-02-13T19:49:28.023Z)
      </td>
    </tr>
  </tbody>
</table>

### Example Request [#list-example-request]

<Collapser
  id="list-tables"
  title="Listing tables updated for an account"
>
  To list the tables for an account, we can send a GET request to the list endpoint.

  Here's an example `curl` command:

  ```bash
  curl "https://nrql-lookup.service.newrelic.com/v1/accounts/YOUR_ACCOUNT_ID" \
       -H 'Accept: text/csv' \
       -H 'Api-Key: YOUR_USER_KEY'
  ```

  Here's an example response JSON payload:

  ```json
  [
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 120
      "rows": 3
      "updatedBy": "jondoe@example.com"
      "updatedAt": "2023-02-13T19:49:28.023Z"
    },
    {
      "accountId": YOUR_ACCOUNT_ID,
      "name": "sample2",
      "guid": "eac37270-7c02-4ca9-b178-8be5748b5b09",
      "size": 4096
      "rows": 2000
      "updatedBy": "janedoe@example.com"
      "updatedAt": "2023-02-14T13:30:21.100Z"
    }
  ]
  ```
</Collapser>

## Error Messaging [#error-messaging]

If a request is unsuccessful, the error response payload will be in the format below.

```json
{
  "code": HTTP_STATUS_CODE(same as status header),
  "message": ERROR_MESSAGE
}
```
