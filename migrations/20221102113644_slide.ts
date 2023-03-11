import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("slide", (builder) => {
    builder.increments("slide_id");
    builder.integer("course_id").unsigned().references("course_id").inTable("course").notNullable();
    builder.integer("file_id").unsigned().references("file_id").inTable("file").notNullable();
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("slide");
  return;
}
