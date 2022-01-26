#! /bin/bash

docker container stop testing_pgadmin_1 testing_migration_1 testing_postgres_1

docker container rm testing_pgadmin_1 testing_migration_1 testing_postgres_1

docker volume rm testing_pgadmin testing_postgres
