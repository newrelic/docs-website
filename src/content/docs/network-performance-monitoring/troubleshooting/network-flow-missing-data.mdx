---
title: Network flow collection is missing data
tags:
  - Integrations
  - Network monitoring
  - Troubleshooting
metaDescription: Troubleshooting collection issues for network flows.
freshnessValidatedDate: 2023-11-02
---

## Problem [#problem]

After installation of the `ktranslate` network monitoring agent, you're having issues collecting network flow telemetry.

## Background [#background]

`ktranslate` returns the raw flow telemetry collected, without editing any of the packet payload. There are [several types of flow](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#supported-network-flow-data-types) supported out of the box, with the most prominent being [NetFlow v5](https://www.cisco.com/c/en/us/td/docs/net_mgmt/netflow_collection_engine/3-6/user/guide/format.html), [NetFlow v9](https://datatracker.ietf.org/doc/html/rfc3954), [sFlow](https://sflow.org/sflow_version_5.txt), and [IPFIX](https://datatracker.ietf.org/doc/html/rfc7011).

<SideBySide>
  <Side>
    All network flow telemetry is stored in the [KFlow event type](/docs/network-performance-monitoring/setup-performance-monitoring/network-flow-monitoring/#find-your-metrics). You can query this directly in NRQL. If this event type is absent, that indicates your account is not receiving the data.
  </Side>

  <Side>
    ```sql
    FROM KFlow 
    SELECT *
    ```
  </Side>
</SideBySide>

## Solution [#solution]

<CollapserGroup>
  <Collapser
    id="ktranslate-configuration"
    title="Flow configuration on your network monitoring agent"
  >
    The `ktranslate` agent can only collect one type of flow template configured by the [-nf.source](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options) argument at runtime, which defaults to `auto`. This tells `ktranslate` to expect any templates from `NetFlow v5` \| `NetFlow v9` \| `sFlow` \| `IPFIX` so it can translate the packets. A common problem is setting `ktranslate` to listen to a specific type of flow template, and then exporting another type into the agent. You need to run separate containers for any templates not covered by `auto`.

    Another common misstep here is exporting your flow telemetry to a `ktranslate` agent, while targeting multiple ports as a destination. In this scenario, you need to run multiple `ktranslate` agents, with each set to a different value for [-nf.port](/docs/network-performance-monitoring/advanced/ktranslate-container-management/#container-runtime-options) at runtime (default is `9995`). You may also need to update the flow exporter configuration on your source network devices to target their specific port.
  </Collapser>

  <Collapser
    id="device-configuration"
    title="Flow configuration on your network device"
  >
    Each vendor will have their own documentation on properly configuring their devices for the export of network flows. The more advanced versions like `NetFlow v9`, `IPFIX`, and `sFlow` have options that allow administrators to customize the fields being collected and exported. Editing these can effectively disable the ability to correctly process the flow records by `ktranslate`.

    The following fields are <DNT>**required**</DNT>:

    <CollapserGroup>
      <Collapser
        id="required-record-group"
        title="Required for all records"
      >
        * Protocol (Field Type Number: `4`) - Layer 4 protocol
        * Source Address (Field Type Number: `8`, `27`) - Source IPv4 or IPv6 address
        * Source Port (Field Type Number: `7`) - Source TCP/UDP port
        * Destination Address (Field Type Number: `12`, `28`) - Destination IPv4 or IPv6 address
        * Destination Port (Field Type Number: `11`) - Destination TCP/UDP port
      </Collapser>

      <Collapser
        id="required-interfaces-group"
        title="Required interfaces fields (at least one)"
      >
        * Interface Receive (Field Type Number: `10`) - SNMP index for ingress interface
        * Interface Transmit (Field Type Number: `14`) - SNMP index for egress interface
      </Collapser>

      <Collapser
        id="required-bytes-group"
        title="Required bytes fields (at least one)"
      >
        * Delta Bytes (Field Type Number: `1`) - Delta bytes
        * Total Bytes (Field Type Number: `85`) - Total bytes
        * Out Bytes (Field Type Number: `23`) - Out bytes
        * Initiator Octets (Field Type Number: `231`) - Initiator bytes
        * Responder Octets (Field Type Number: `232`) - Responder bytes
      </Collapser>

      <Collapser
        id="required-packets-group"
        title="Required packets fields (at least one)"
      >
        * Delta Packets (Field Type Number: `2`) - Delta packets
        * Total Packets (Field Type Number: `86`) - Total packets
        * Out Packets (Field Type Number: `24`) - Out packets
        * Initiator Packets (Field Type Number: `298`) - Initiator packets
        * Responder Packets (Field Type Number: `299`) - Responder packets
      </Collapser>

      <Collapser
        id="required-routing-group"
        title="Required routing fields (at least one)"
      >
        * ToS (Field Type Number: `5`) - Type of service
        * Source AS (Field Type Number: `16`) - Source BGP autonomous system number
        * Destination AS (Field Type Number: `17`) - Destination BGP autonomous system number
        * Peer Source AS (Field Type Number: `129`) - Peer source BGP autonomous system number
        * Peer Destination AS (Field Type Number: `128`) - Peer destination BGP autonomous system number
      </Collapser>

      <Callout variant="tip">
        `ktranslate` defaults all flow records to `Direction: ingress` unless the record explicitly uses a value of `egress`. This covers various situations where flow records are sent without the `Direction` field.
      </Callout>
    </CollapserGroup>
  </Collapser>

  <Collapser
    id="tcpdump-confirmation"
    title="Confirming flow reception"
  >
    Each vendor will have their own documentation on watching flow export counters via their device CLI/UI. A lack of counter growth on the device indicates the flow export is not configured correctly on the device.

    Both the Docker container and Linux service deployment options for `ktranslate` use the host's network to receive data on the mapped port. In order to validate flow records are being received by the host, you can use the [tcpdump](https://www.tcpdump.org) utility to create a packet capture (`.pcap`) file that you can later investigate in [Wireshark](https://www.wireshark.org/).

    Executing this command will set `tcpdump` to capture every incoming packet across all interfaces on the host, and write the output to a file in the current directory:

    ```shell
    sudo tcpdump -s 0 -i any -w dump_capture.pcap
    ```

    Note that you can add multiple arguments to [tcpdump](https://www.tcpdump.org/manpages/tcpdump.1.html), the most important item here is the output file that you can use for analysis later. Outputting the results in `STDOUT` creates limited value for the current purposes.

    Once you have this file, the next section will show you how to analyze the results.

    <Callout variant="tip">
      One of the most common issues found is a network configuration/firewall rule that blocks the packets from the source network devices to the target `ktranslate` host. If you're not getting any results with the `tcpdump` utility, the best place to start troubleshooting is to confirm your network rules and `iptables` configuration.
    </Callout>
  </Collapser>

  <Collapser
    id="improperly-formatted-flow-records"
    title="Identifying flow record templates with Wireshark"
  >
    Follow these steps to use [Wireshark](https://www.wireshark.org/) for inspecting the packet capture file.

    <Steps>
      <Step>
        Start the Wireshark application and open the packet capture file
      </Step>

      <Step>
        The initial view shows all of the captured packets, but for flow analysis you'll need to set the application to decode them properly. Using the menu, navigate to `Analyze > Decode As...`, which opens up a new popup.
      </Step>

      <Step>
        On the popup, click the plus (`+`) icon in the bottom left, which will add a new row to the panel. The initial option in the `Current` column is `(none)`. Click this to open a drop-down menu and then select either `CFLOW` for `NetFlow` and `IPFIX`, or `sFlow` for `sFlow` packets. Click `OK` in the bottom right to go back to the main UI.

        <Callout variant="tip">
          This menu is alphabetized with case-sensitivity. The `sFlow` option is at the very bottom of the list.
        </Callout>
      </Step>

      <Step>
        In the main UI, you should be able to see the `CFLOW` \| `sFlow` packets now by identifying them in the `Protocol` column. Applying the display filter `(cflow or sflow)` will automatically isolate the packets you need from anything else that may be in the capture file.

        The following sections outline how to inspect each packet type.

        <CollapserGroup>
          <Collapser
            id="netflow-ipfix-analysis"
            title="Analyzing NetFlow and IPFIX packets"
          >
            `NetFlow` and `IPFIX` protocols use a template approach where the administrator can identify which fields to collect, from a list of standard options. Analysis of these packets is done to ensure the [required fields](#device-configuration) for `ktranslate` are being captured.

            In the main UI for Wireshark, click to select a single `CFLOW` packet and then expand the section titled `FlowSet n`, where `n` is an integer that identifies a singular flow record in a packet. You will then expand the `Flow n` subgroup to analyze the fields of this flow record.

            <Callout variant="tip">
              You can also click on the `Template Frame` link in the packet to be taken to a captured packet which contains the template for all flows from this device.
            </Callout>
          </Collapser>

          <Collapser
            id="sflow-analysis"
            title="Analyzing sFlow packets"
          >
            Due to protocol differences between `sFlow` and the more traditional `NetFlow/IPFIX` protocols, there are different fields to analyze.

            In the main UI for Wireshark, click to select a single `sFlow` packet and then expand the section titled `InMon sFlow`. The following fields should be present:

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    Field
                  </th>

                  <th>
                    Description
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Datagram version
                  </td>

                  <td>
                    The version of this sFlow packet.
                  </td>
                </tr>

                <tr>
                  <td>
                    Agent address type
                  </td>

                  <td>
                    IPv4 (1) or IPv6 (2)
                  </td>
                </tr>

                <tr>
                  <td>
                    Agent address
                  </td>

                  <td>
                    IP address the flows are being exported from. This is where you have your flow exporter configured.
                  </td>
                </tr>

                <tr>
                  <td>
                    Sub-agent ID
                  </td>

                  <td>
                    In sFlow v5, you can run multiple exporter processes. This is their unique identifier.
                  </td>
                </tr>

                <tr>
                  <td>
                    Sequence number
                  </td>

                  <td>
                    The number of sFlow packets sent by the agent device.
                  </td>
                </tr>

                <tr>
                  <td>
                    SysUptime
                  </td>

                  <td>
                    Time since the agent device last rebooted.
                  </td>
                </tr>

                <tr>
                  <td>
                    NumSamples
                  </td>

                  <td>
                    The count of sFlow samples contained in the current packet.
                  </td>
                </tr>
              </tbody>
            </table>

            Expanding a sub-group entitled `Flow sample` will show these additional fields:

            <table>
              <thead>
                <tr>
                  <th style={{ width: "350px" }}>
                    Field
                  </th>

                  <th>
                    Description
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Enterprise
                  </td>

                  <td>
                    This field annotates custom sFlow enterprise configurations that administrators can optionally enable when configuring their sFlow exports. (`0` by default)
                  </td>
                </tr>

                <tr>
                  <td>
                    sFlow sample type
                  </td>

                  <td>
                    This is the designation for the type of sample being used when an enterprise customizes their sFlow exports. You can find definitions in [the sFlow documentation](http://www.sflow.org/developers/diagrams/sFlowV5Sample.pdf).
                  </td>
                </tr>

                <tr>
                  <td>
                    Sample length
                  </td>

                  <td>
                    Length of the sample, in bytes.
                  </td>
                </tr>

                <tr>
                  <td>
                    Sequence number
                  </td>

                  <td>
                    Counter value incremented every time the agent takes a sample.
                  </td>
                </tr>

                <tr>
                  <td>
                    Sampling rate
                  </td>

                  <td>
                    1 in `X` packets are sampled.
                  </td>
                </tr>

                <tr>
                  <td>
                    Sample pool
                  </td>

                  <td>
                    Total possible packets that could have been sampled, including the actual sampled packets.
                  </td>
                </tr>

                <tr>
                  <td>
                    Dropped packets
                  </td>

                  <td>
                    Number of packets that were dropped due to resource constraints.
                  </td>
                </tr>

                <tr>
                  <td>
                    Input interface
                  </td>

                  <td>
                    SNMP ifIndex of the interface the packet arrived in from.
                  </td>
                </tr>

                <tr>
                  <td>
                    Flow record
                  </td>

                  <td>
                    Number of sampled records contained in this sample.
                  </td>
                </tr>
              </tbody>
            </table>
          </Collapser>
        </CollapserGroup>
      </Step>
    </Steps>

    <Callout variant="tip">
      This same pattern, without the `Decode as...` step, can be applied to validate receipt of both syslog and SNMP trap data.
    </Callout>
  </Collapser>
</CollapserGroup>
