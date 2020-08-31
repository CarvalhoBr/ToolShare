// Update with your config settings.
import path from 'path';

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user: 'postgres',
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
