import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("student", (builder) => {
    builder.increments("student_id");
    builder.string("name");
    builder.string("student_uid").unique();
    builder.string("research");
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("student");
  return;
}
