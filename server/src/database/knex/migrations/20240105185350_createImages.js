/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("images", table => {
    table.increments("id");
    table.text("title");
    table.text("path");
    table.integer("users_id").references("id").inTable("users");
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("images")
