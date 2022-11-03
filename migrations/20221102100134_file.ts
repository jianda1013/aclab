import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("file", (builder) => {
    builder.increments("file_id");
    builder.string("name").notNullable();
    builder.string("path").unique().notNullable();
    builder.enum("bucket", ["paper", "course"]).defaultTo("paper").notNullable();
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("file");
  return;
}
