---
subject: Go agent
releaseDate: '2019-06-11'
version: '2.8'
downloadLink: 'https://github.com/newrelic/go-agent/tree/v2.8.0'
---

## 2.8.0

### New Features

* **Support for Real Time Streaming**

  * Event data is now sent to New Relic every five seconds, instead of every minute. As a result, transaction, error, and custom events will now be available in New Relic dashboards in near real time. For more information on how to view your events with a five-second refresh, see the [real time streaming documentation](/docs/agents/manage-apm-agents/agent-data/real-time-streaming).
  * Note that the overall limits on how many events can be sent per minute have not changed. Also, span events, metrics, and trace data is unaffected, and will still be sent every minute.
* Introduce support for databases using [database/sql](https://golang.org/pkg/database/sql/). This new functionality allows you to instrument MySQL, PostgreSQL, and SQLite calls without manually creating [DatastoreSegment](https://godoc.org/github.com/newrelic/go-agent#DatastoreSegment)s.

<table>
  <thead>
    <tr>
      <th>
        Database Library Supported
      </th>

      <th>
        Integration Package
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql)
      </td>

      <td>
        [\_integrations/nrmysql](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrmysql)
      </td>
    </tr>

    <tr>
      <td>
        [lib/pq](https://github.com/lib/pq)
      </td>

      <td>
        [\_integrations/nrpq](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrpq)
      </td>
    </tr>

    <tr>
      <td>
        [mattn/go-sqlite3](https://github.com/mattn/go-sqlite3)
      </td>

      <td>
        [\_integrations/nrsqlite3](https://godoc.org/github.com/newrelic/go-agent/_integrations/nrsqlite3)
      </td>
    </tr>
  </tbody>
</table>

Using these database integration packages is easy! First replace the driver with our integration version:

```
import (
    // import our integration package
    _ "github.com/newrelic/go-agent/_integrations/nrmysql"
  )

  func main() {
    // open "nrmysql" in place of "mysql"
    db, err := sql.Open("nrmysql", "user@unix(/path/to/socket)/dbname")
  }
```

Second, use the `ExecContext`, `QueryContext`, and `QueryRowContext` methods of [sql.DB](https://golang.org/pkg/database/sql/#DB), [sql.Conn](https://golang.org/pkg/database/sql/#Conn), [sql.Tx](https://golang.org/pkg/database/sql/#Tx), and [sql.Stmt](https://golang.org/pkg/database/sql/#Stmt) and provide a transaction-containing context. Calls to `Exec`, `Query`, and `QueryRow` do not get instrumented.

```
ctx := newrelic.NewContext(context.Background(), txn)
  row := db.QueryRowContext(ctx, "SELECT count(*) from tables")
```

If you are using a [database/sql](https://golang.org/pkg/database/sql/) database not listed above, you can write your own instrumentation for it using [InstrumentSQLConnector](https://godoc.org/github.com/newrelic/go-agent#InstrumentSQLConnector), [InstrumentSQLDriver](https://godoc.org/github.com/newrelic/go-agent#InstrumentSQLDriver), and [SQLDriverSegmentBuilder](https://godoc.org/github.com/newrelic/go-agent#SQLDriverSegmentBuilder). The integration packages act as examples of how to do this.

For more information, see the [Go agent documentation on instrumenting datastore segments](https://docs.newrelic.com/docs/agents/go-agent/instrumentation/instrument-go-segments#go-datastore-segments).

### Bug Fixes

* The [http.RoundTripper](https://golang.org/pkg/net/http/#RoundTripper) returned by [NewRoundTripper](https://godoc.org/github.com/newrelic/go-agent#NewRoundTripper) no longer modifies the request. Our thanks to @jlordiales for the contribution.
