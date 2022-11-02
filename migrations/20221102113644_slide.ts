import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("slide", (builder) => {
    builder.increments("slide_id");
    builder.string("name");
    builder.integer("course_id").unsigned().references("course_id").inTable("course");
    builder.integer("file_id").unsigned().references("file_id").inTable("file");
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("slide");
  return;
}
