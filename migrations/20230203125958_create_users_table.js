/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
   return knex.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("first_name", 255).notNullable();
      table.string("last_name", 255).notNullable();
      table.text("address").notNullable();
      table.string("post_code", 25).notNullable();
      table.string("contact_phone_number", 25).notNullable();
      table.string("email", 50).notNullable();
      table.string("username", 50).notNullable();
      table.string("password", 255).notNullable();
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
   return knex.schema.dropTable("users");
};
