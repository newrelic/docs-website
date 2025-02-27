---
headingText: Enable query monitoring
componentType: default
---


You can view query-level analysis to assess the performance and impact of your SQL queries in your PostgreSQL database. This feature provides insights into execution times, resource consumption, and potential bottlenecks, enabling you to optimize database operations. For more information, refer [Query-Level Analysis](/docs/infrastructure/infrastructure-data/query-level-monitoring).

**Prerequisites:**

* PostgreSQL version is 12 or later.
* Enable the `pg_stat_statements`, `pg_stat_monitor` and `pg_wait_sampling` extensions. For more information, refer [Enabling extensions](#enabling-extensions).

### Enabling extensions [#enabling-extensions]

1. To install the required packages, update `<YOUR-VERSION>` with your PostgreSQL version in the following command, and then run it:

    ```shell
    sudo apt update && sudo apt install golang-go && sudo apt install gcc && sudo apt install make && sudo apt-get install postgresql-server-dev-<YOUR-VERSION>
    ```

2. To retrieve query wait events, install the `pg_wait_sampling` extension by running the following commands:

    ```shell
    git clone https://github.com/postgrespro/pg_wait_sampling.git 
    cd pg_wait_sampling
    sudo make USE_PGXS=1
    sudo make USE_PGXS=1 install
    ```

3. To retrieve the individual query and execution plan details, install the `pg_stat_monitor` extension by running the following commands:

    ```shell
    git clone https://github.com/percona/pg_stat_monitor.git 
    cd pg_stat_monitor
    sudo make USE_PGXS=1
    sudo make USE_PGXS=1 install 
    ```

4. To retrieve slow running queries, install the `pg_stat_statements` extension:

    1. Open the `postgresql.conf` file:

        ```bash
        sudo nano /etc/postgresql/<your-version>/main/postgresql.conf
        ```

    2. Add `pg_stat_statements` to `shared_preload_libraries` in the `postgresql.conf` file:

        ```bash
        shared_preload_libraries = 'pg_stat_statements,pg_wait_sampling,pg_stat_monitor'
        pg_stat_statements.max = 10000    # Maximum number of statements tracked
        pg_stat_statements.track = all    # Track all statements
        pg_stat_statements.save = on      # Save statistics across server restarts
        ```

5. To restart the PostgreSQL server, run:
    ```shell
    sudo systemctl restart postgresql
    ```

6. To connect to the PostgreSQL server, run:
    ```shell
    sudo -u postgres psql
    ```

7. To enable the extensions for your database, run:
    ```shell
    CREATE EXTENSION pg_stat_statements;
    CREATE EXTENSION pg_wait_sampling;
    CREATE EXTENSION pg_stat_monitor;
    ```

8. To grant the required permissions, run:

    ```shell
    sudo -u postgres psql
    GRANT pg_read_all_stats TO newrelic;
    GRANT SELECT ON ALL TABLES IN SCHEMA public TO your_username;
    ```