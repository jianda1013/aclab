import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("course", (builder) => {
    builder.increments("course_id");
    builder.string("name").notNullable();
    builder.integer("year");
    builder.enum("semester", ["fall", "spring"]);
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("course");
  return;
}
