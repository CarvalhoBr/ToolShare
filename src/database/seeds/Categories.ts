// eslint-disable-next-line no-unused-vars
import * as Knex from 'knex';

export default async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('categories').del();

  // Inserts seed entries
  await knex('categories').insert([
    { id: 1, name: 'Furadeiras' },
    { id: 2, name: 'Parafusadeiras' },
    { id: 3, name: 'Jogos Completos' },
  ]);
}
