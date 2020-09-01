import knex from 'knex';
import configuration from '../../knexfile';

const db = knex(configuration.development);

export default db;
