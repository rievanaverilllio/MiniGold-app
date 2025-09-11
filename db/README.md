Database migrations folder

- Place SQL files in `db/migrations` named with a leading sequence, e.g. `0001_create_users_table.sql`.
- Run migrations using the script: `npm run migrate` (requires `DATABASE_URL` or `PG_CONNECTION_STRING` env var).
- Check migration status: `npm run migrate:status`.

The migration script uses a simple `schema_migrations` table to track applied files.
