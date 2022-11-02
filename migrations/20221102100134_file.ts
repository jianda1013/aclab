import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("file", (builder) => {
    builder.increments("file_id");
    builder.string("name");
    builder.string("path").unique();
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("file");
  return;
}
