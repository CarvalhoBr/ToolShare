import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: 'docker',
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
});

export default db;
