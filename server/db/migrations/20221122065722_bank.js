/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('bank', (table) => {
        table.increments('id')
        table.string('name')
      })
}


exports.down = function(knex) {
    return knex.schema.dropTable('bank')
};
