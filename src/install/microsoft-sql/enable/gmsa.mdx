---
componentType: default
headingText: Enable your Microsoft SQL Server 
---

1. Create a new login and grant `CONNECT` and `VIEW` permissions:

    ```sql
    USE master;
        CREATE LOGIN [DomainName\gMSA] FROM windows;
        GRANT CONNECT SQL TO [Domain\gMSA];
        GRANT VIEW SERVER STATE TO [Domain\gMSA];
        GRANT VIEW ANY DEFINITION TO [Domain\gMSA];
    ```

2. Use the following statements to grant `READ` access privileges to the user:

```sql
    DECLARE @name SYSNAME
        DECLARE db_cursor CURSOR
        READ_ONLY FORWARD_ONLY
        FOR
        SELECT NAME
        FROM master.sys.databases
        WHERE NAME NOT IN ('master','msdb','tempdb','model','rdsadmin','distribution')
        OPEN db_cursor
        FETCH NEXT FROM db_cursor INTO @name WHILE @@FETCH_STATUS = 0
        BEGIN
            EXECUTE('USE "' + @name + '"; CREATE USER [Domain\gMSA] FOR LOGIN [Domain\gMSA];' );
            FETCH next FROM db_cursor INTO @name
        END
        CLOSE db_cursor
        DEALLOCATE db_cursor
    ```