---
title: Testing the Python agent
type: troubleshooting
tags:
  - Agents
  - Python agent
  - Troubleshooting
metaDescription: How to test your Python agent by running the newrelic-admin validate-config (config file location) command.
redirects:
  - /docs/agents/python-agent/troubleshooting/testing-python-agent
  - /docs/agents/python-agent/installation-configuration/testing-python-agent
  - /docs/python/testing-the-python-agent
  - /docs/agents/python-agent/installation-and-configuration/testing-python-agent
freshnessValidatedDate: never
---

## Problem

If you experience issues when installing or running the Python agent on a new host, test that the package is installed correctly and that it can contact our data collector service. If the data collector service is unreachable, it may be due to a blocked firewall. Perform these network connectivity tests to narrow down the cause of the problem.

## Solution

### Test connection [#connectivity-test]

The Python agent includes a built-in test app that can verify your connection to our [collector](/docs/accounts-partnerships/education/getting-started-new-relic/glossary#collector). To verify with the test app, run this command with the path to your New Relic config file:

```sh
newrelic-admin validate-config LOCATION_OF_NEWRELIC.INI
```

This runs a test using the Python agent. The agent will report the sample data to the account that corresponds to the agent config file, and a test app named `Python Agent Test` for the reported sample data will appear in the APM UI.

After the test is completed, the UI will show the app as inactive. Follow standard procedures to [delete the test app](/docs/apm/new-relic-apm/maintenance/remove-applications-servers) from the APM index.

### Check log for errors [#check-for-errors]

If no data is transferred to the UI after five minutes, check the messages output from the test as well as the log file produced. If you encounter any problem that suggests an issue with being able to reach our data collector service, then try these troubleshooting procedures:

* Verify the [network configuration](/docs/agents/python-agent/installation-configuration/testing-python-agent#network-configuration).
* Check the [host name lookup](/docs/agents/python-agent/installation-configuration/testing-python-agent#host-name-lookup).
* Route the [network traffic](/docs/agents/python-agent/installation-configuration/testing-python-agent#network-traffic-routing).

Here are examples of error messages you may find.

<CollapserGroup>
  <Collapser
    id="license-key-not-added"
    title="A license key was not added to the agent configuration file."
  >
    <DNT>
      **ERROR - No license key was set in agent configuration.**
    </DNT>

    Ensure that the <InlinePopover type="licenseKey"/> has been specified in the agent configuration file or via the `NEW_RELIC_LICENSE_KEY` environment variable. Correct the problem with the license key, or get support at [support.newrelic.com](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="invalid-license-key"
    title="An invalid license key was added to the agent configuration file."
  >
    <DNT>
      **ERROR - Data collector indicates that an incorrect license key has been supplied by the agent.**
    </DNT>

    The value used by the agent is `...`. Correct the problem with the <InlinePopover type="licenseKey"/>, or get support at [support.newrelic.com](https://support.newrelic.com).
  </Collapser>

  <Collapser
    id="collector-not-contacted"
    title="The data collector service cannot be contacted."
  >
    <DNT>
      **ERROR - Unable to register application for test, connection could not be established within 30.0 seconds.**
    </DNT>

    This is a fallback message when a connection cannot be established. It indicates that the data collector service cannot be reached or there is an issue in resolving the hostname for the data collector host.
  </Collapser>

  <Collapser
    id="collector-unavailable"
    title="The data collector service is currently unavailable."
  >
    * <DNT>
        **WARNING - Data collector is not contactable.**
      </DNT>

      This is either due to a network issue or the data collector being restarted. If contact cannot be made after a period of time, get support at [support.newrelic.com](https://support.newrelic.com).
    * <DNT>
        **ERROR - ConnectionError(MaxRetryError('Max retries exceeded for url: ...,),)**
      </DNT>

      This generally occurs when our data collector service is temporarily unavailable. Retry the test.
  </Collapser>
</CollapserGroup>

### Verify network configuration [#network-configuration]

To verify the network connection, run the following:

```sh
newrelic-admin network-config newrelic.ini
```

Look for results similar to this:

```ini
host = 'collector.newrelic.com'
port = 0
proxy_host = None
proxy_port = None
proxy_user = None
proxy_pass = None
ssl = True
```

* <DNT>**Port:**</DNT> A value of `0` for the port setting indicates that the appropriate port, such as `80` or `443`, will be used depending on whether or not SSL is enabled.
* <DNT>**Proxy:**</DNT> If you have configured the agent to use a proxy, make sure the proxy settings reflect this. If no proxy settings are specified but any HTTP connections to the wider Internet are necessary, then make sure the appropriate proxy settings appear in the agent configuration file.

### Check hostname lookup [#host-name-lookup]

If the data collector appears unreachable:

1. Check that the hostname for the primary data collector host can be resolved with UNIX system tools such as `dig` or `nslookup`.
2. If this does not succeed, check the configuration of any domain name resolver files for your host.

Here is an example:

```sh
dig collector.newrelic.com
[output] 
[output] ; <<>> DiG 9.8.3-P1 <<>> collector.newrelic.com
[output] ;; global options: +cmd
[output] ;; Got answer:
[output] ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 62183
[output] ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 4, ADDITIONAL: 4
[output] 
[output] ;; QUESTION SECTION:
[output] ;collector.newrelic.com.                IN      A
[output] 
[output] ;; ANSWER SECTION:
[output] collector.newrelic.com. 2453    IN      A       162.247.243.32
[output] 
[output] ;; AUTHORITY SECTION:
[output] newrelic.com.           1163    IN      NS      ns2.p21.dynect.net.
[output] newrelic.com.           1163    IN      NS      ns1.p21.dynect.net.
[output] newrelic.com.           1163    IN      NS      ns4.p21.dynect.net.
[output] newrelic.com.           1163    IN      NS      ns3.p21.dynect.net.
[output] 
[output] ;; ADDITIONAL SECTION:
[output] ns1.p21.dynect.net.     3198    IN      A       208.78.70.21
[output] ns2.p21.dynect.net.     8576    IN      A       204.13.250.21
[output] ns3.p21.dynect.net.     7364    IN      A       208.78.71.21
[output] ns4.p21.dynect.net.     8576    IN      A       204.13.251.21
[output] 
[output] ;; Query time: 22 msec
[output] ;; SERVER: 192.168.178.1#53(192.168.178.1)
[output] ;; WHEN: Tue Jun 11 18:58:23 2013
[output] ;; MSG SIZE  rcvd: 206
```

### Check network traffic routing [#route-network-traffic]

<Callout variant="important">
  Our agents require your firewall to allow an outgoing connection to our [network](/docs/apm/new-relic-apm/getting-started/networks):

  * TCP port `443` if using HTTPS over a SSL connection
  * TCP port `80` if using a plain HTTP connection
</Callout>

If the hostname for the data collector host can be resolved, use UNIX system tools such as `ping` and `traceroute` to determine if network traffic can be routed to it. The network traffic path will vary. As long as the path reaches the final intended host, the length of the path and its hosts are not important.

If you cannot contact the data collector host, configure the agent to use any firewall HTTP proxy, or open the required outgoing ports in the firewall to allow connections to the data collector.

<CollapserGroup>
  <Collapser
    id="ping"
    title="Ping"
  >
    ```sh
    ping collector.newrelic.com
    [output] PING collector.newrelic.com (162.247.243.32): 56 data bytes
    [output] 64 bytes from 162.247.243.32: icmp_seq=0 ttl=239 time=234.204 ms
    [output] 64 bytes from 162.247.243.32: icmp_seq=1 ttl=239 time=230.095 ms
    [output] ...
    ```
  </Collapser>

  <Collapser
    id="traceroute"
    title="Traceroute"
  >
    When using `traceroute`, tell it to use ports `80` and `443`.

    ```sh
    traceroute -p 80 collector.newrelic.com
    [output] traceroute to collector.newrelic.com (162.247.243.32), 64 hops max, 52 byte packets
    [output]  1  ...
    [output]  2  ...
    [output]  3  ...
    [output]  4  * * *
    [output]  5  collector.newrelic.com (162.247.243.32)  232.590 ms  231.000 ms  232.041 ms

    traceroute -p 443 collector.newrelic.com
    [output] traceroute to collector.newrelic.com (162.247.243.32), 64 hops max, 52 byte packets
    [output]  1  ...
    [output]  2  ...
    [output]  3  ...
    [output]  4  * * *
    [output]  5  collector.newrelic.com (162.247.243.32)  253.513 ms  231.134 ms  232.511 ms
    ```
  </Collapser>
</CollapserGroup>
