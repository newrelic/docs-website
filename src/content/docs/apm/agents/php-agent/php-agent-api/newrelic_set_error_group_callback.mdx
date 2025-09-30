---
title: newrelic_set_error_group_callback (PHP agent API)
type: apiDoc
shortDescription: This method allows a user to define a custom callback function to generate error group names.
tags:
  - Agents
  - PHP agent
  - PHP agent API
metaDescription: 'Use this API to register a callback which returns a custom error group name.'
redirects:
  - /docs/agents/php-agent/php-agent-api/newrelic_set_error_group_callback
freshnessValidatedDate: 2023-09-01
---

## Syntax

```php
newrelic_set_error_group_callback($callback)
```

Group errors with your own custom-defined fingerprinting callback function.

## Requirements

Agent version 10.12 or higher.

## Description

This API allows a user to register a custom callback function with the PHP agent that will be called when the application encounters an error.

The callback will provide two PHP arrays from the agent - one containing transaction data, and another containing error data.

Using the provided context information, the callback must return a non-empty string based on user-defined logic that will serve as the error group name displayed in the Errors Inbox UI.

<Callout variant="important">
  * When there are multiple calls to this function in a single transaction, the PHP agent retains the callback from the last call only.

  * Callbacks are registered on a per-request basis. This API should be called in a code path that is guaranteed to be executed for each request, or the callback will not be invoked.

  * It is highly recommended to keep your callback function as minimal as possible. CPU-intensive callbacks (such as database calls) or other complex logic will result in performance impacts on your application.
</Callout>

## Parameters

This API accepts a single function-type callback as an argument. The provided callback must accept 2 parameters.

<table>
  <thead>
    <tr>
      <th width="25%">
        API Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$callback` (_function_)
      </td>

      <td>
        Required. Provide a callback function that will be registered with the PHP agent.
      </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th width="25%">
        Callback Parameters
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `$transaction_data` (_array_)
      </td>

      <td>
        Required. An array of transaction data provided to your callback by the PHP agent.
      </td>
    </tr>

    <tr>
      <td>
        `$error_data` (_array_)
      </td>

      <td>
        Required. An array of error data provided to your callback by the PHP agent.
      </td>
    </tr>
  </tbody>
</table>

### Array key/value pairs

#### `$transaction_data` - PHP agent transaction data provided to your callback

<table>
  <thead>
    <tr>
      <th width="25%">
        Key
      </th>

      <th>
        Value
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        "request_uri"
      </td>

      <td>
        (_string_) Request URI
      </td>
    </tr>

    <tr>
      <td>
        "path"
      </td>

      <td>
        (_string_) Filepath
      </td>
    </tr>

    <tr>
      <td>
        "method"
      </td>

      <td>
        (_string_) HTTP method (`GET`, `POST`, etc.)
      </td>
    </tr>

    <tr>
      <td>
        "status_code"
      </td>

      <td>
        (_int_) HTTP status code (`200`, `404`, etc.)
      </td>
    </tr>
  </tbody>
</table>

#### `$error_data` - PHP agent error data provided to your callback

<table>
  <thead>
    <tr>
      <th width="25%">
        Key
      </th>

      <th>
        Value
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        "klass"
      </td>

      <td>
        (_string_) Class name
      </td>
    </tr>

    <tr>
      <td>
        "message"
      </td>

      <td>
        (_string_) Error message
      </td>
    </tr>

    <tr>
      <td>
        "file"
      </td>

      <td>
        (_string_) Filepath
      </td>
    </tr>

    <tr>
      <td>
        "stack"
      </td>

      <td>
        (_string_) JSON error strack trace
      </td>
    </tr>
  </tbody>
</table>

<Callout variant="important">
  * Not all keys are guaranteed to contain values. This is highly dependent on the user application and the nature of the error.
  * Array keys will always be set regardless of whether or not they contain empty values.
</Callout>

## Return values

API returns `true` if the callback is registered successfully, otherwise `false`.

## Examples

```php
if (extension_loaded('newrelic')) { // Ensure PHP agent is available
  $callback = function(array $transaction_data, array $error_data)
  {
      $fingerprint = "";

      //
      // Add custom code to parse array data
      //

      // Example code
      if ($error_data["klass"] == "E_USER_ERROR") {
        $fingerprint = "USER ERROR";
      };

      return $fingerprint;    // Non-empty string error group name
  };

  newrelic_set_error_group_callback($callback);
};
```
