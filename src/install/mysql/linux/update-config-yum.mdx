---
componentType: default
headingText: Enable MySQL query-level monitoring
---

Configure your integration to enable query-level monitoring in New Relic. By setting the appropriate parameters, you can capture detailed metrics on query performance, which allows you to identify and optimize slow or inefficient queries. For more information, refer [Query-Level monitoring](/docs/infrastructure/infrastructure-data/query-level-monitoring).


<Callout variant="important">
Query-level monitoring is supported only on MySQL version 8.0 and later.
</Callout>

1. Open the MySQL configuration file available at either `/etc/my.cnf.d/mysql-server.cnf` or `/etc/my.cnf`:
   ```ini
   [mysqld]
    performance_schema=ON

    # Specify an initialization file for RHEL/CentOS/Amazon Linux/Oracle Linux 
    init-file = /etc/init.sql
   ```
2. In the `/etc/` directory, create a `init.sql` file with the following content: 
   ```sql
    -- Enable required Performance Schema instruments
    UPDATE performance_schema.setup_instruments
    SET ENABLED = 'YES', TIMED = 'YES'
    WHERE NAME LIKE 'wait/%' OR NAME LIKE 'statement/%' OR NAME LIKE '%lock%';

    UPDATE performance_schema.setup_consumers
    SET ENABLED = 'YES'
    WHERE NAME IN (
    'events_waits_current', 'events_waits_history_long',
    'events_waits_history',
    'events_statements_history_long',
    'events_statements_history', 'events_statements_current', 
    'events_statements_cpu'
    ) OR NAME LIKE 'events_waits_current%' OR NAME LIKE 'events_transactions_current%' 
    OR NAME LIKE 'events_stages_current%';

    -- Increase Innodb lock wait timeout
    SET GLOBAL innodb_lock_wait_timeout = 120;
   ```
3. To apply the changes made to the configuration file, run the following command, and restart MySQL server:
   ```shell
    sudo systemctl restart mysql
   ```
4. To check the MySQL server status, run the following command:
   ```shell
    sudo systemctl status mysql
   ```