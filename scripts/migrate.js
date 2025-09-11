#!/usr/bin/env node
// Simple migration runner using node-postgres
// Usage: node migrate.js up|down|status

const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const MIGRATIONS_DIR = path.join(__dirname, '..', 'db', 'migrations');
const META_TABLE = 'schema_migrations';

function getClientFromEnv() {
  const params = {
    connectionString: process.env.DATABASE_URL || process.env.PG_CONNECTION_STRING,
  };
  return new Client(params);
}

async function ensureMetaTable(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS ${META_TABLE} (
      id serial PRIMARY KEY,
      name text NOT NULL UNIQUE,
      run_at timestamptz NOT NULL DEFAULT now()
    );
  `);
}

function listMigrationFiles() {
  const files = fs.readdirSync(MIGRATIONS_DIR)
    .filter(f => f.endsWith('.sql'))
    .sort();
  return files;
}

async function appliedMigrations(client) {
  const res = await client.query(`SELECT name FROM ${META_TABLE} ORDER BY name`);
  return res.rows.map(r => r.name);
}

async function runUp(client) {
  const files = listMigrationFiles();
  const applied = await appliedMigrations(client);
  const toRun = files.filter(f => !applied.includes(f));
  if (toRun.length === 0) {
    console.log('No pending migrations');
    return;
  }
  for (const file of toRun) {
    const sql = fs.readFileSync(path.join(MIGRATIONS_DIR, file), 'utf8');
    console.log('Running', file);
    try {
      await client.query('BEGIN');
      await client.query(sql);
      await client.query(`INSERT INTO ${META_TABLE} (name) VALUES ($1)`, [file]);
      await client.query('COMMIT');
      console.log('Applied', file);
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('Failed to apply', file, err.message);
      process.exit(1);
    }
  }
}

async function status(client) {
  const files = listMigrationFiles();
  const applied = await appliedMigrations(client);
  console.log('Migrations status:');
  for (const f of files) {
    console.log(`${applied.includes(f) ? '[X]' : '[ ]'} ${f}`);
  }
}

async function main() {
  const cmd = process.argv[2] || 'up';
  const client = getClientFromEnv();
  try {
    await client.connect();
    await ensureMetaTable(client);
    if (cmd === 'up') {
      await runUp(client);
    } else if (cmd === 'status') {
      await status(client);
    } else {
      console.log('Unknown command. Use up|status');
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
