---
name: commandName
type: attribute
events:
  - ProcessSample
---

The command name of the process corresponds, in most cases, to the base name of the command line's path to the form of the process.

<Callout variant="tip">
  In Linux, this attribute is retrieved from `/proc/PID/stat`, in which strings longer than 16 characters are silently truncated. Internally, linux command names can be up to 16 bytes long. More information can be found in the [proc manual pages](https://man7.org/linux/man-pages/man5/proc.5.html).
</Callout>
