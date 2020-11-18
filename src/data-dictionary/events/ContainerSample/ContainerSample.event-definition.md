---
name: ContainerSample
type: event
dataSources:
  - Infrastructure
---

This event is reported by the New Relic Infrastructure agent. It collects data from all the Docker containers on the host (which may or may not be running). It includes the container's ID, name, image, image name, and metrics about CPU, memory and networking. We take a snapshot of this data every 15 seconds for each container and package it into this event, which is then sent to New Relic. This data appears on the Containers UI page.