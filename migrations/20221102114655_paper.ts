import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("paper", (builder) => {
    builder.increments("paper_id");
    builder.string("name");
    builder.integer("year");
    builder.integer("file_id").unsigned().references("file_id").inTable("file");
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("paper");
  return;
}
