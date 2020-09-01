// Update with your config settings.
import path from 'path';

const configuration = {

  development: {

    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'docker',
      database: 'ToolShareDb',
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
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

export default configuration;
