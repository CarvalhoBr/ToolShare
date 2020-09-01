// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tools', (table) => {
    table.string('id').primary();
    table.string('price').notNullable();
    table.string('description').notNullable();
    table.string('latitude').notNullable();
    table.string('longitude').notNullable();
    table.string('category_id').notNullable();
    table.string('user_id').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tools');
}
