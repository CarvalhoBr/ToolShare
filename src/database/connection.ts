import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: 'docker',
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
  migrations: {
    directory: path.resolve(__dirname, 'migrations'),
  },
});

export default db;
