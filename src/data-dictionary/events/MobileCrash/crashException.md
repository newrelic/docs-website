---
name: crashException
type: attribute
events:
  - MobileCrash
---

The exception associated with the crash, if one is present. For example: java.lang.NullPointerException.

Native crashes exceptions are associated with [com.newrelic.agent.android.ndk.NativeException](https://github.com/newrelic/android-agent-ndk/blob/main/agent-ndk/src/main/java/com/newrelic/agent/android/ndk/NativeException.kt) classes.
