import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("project_student", (builder) => {
    builder.integer("student_id").unsigned().references("student_id").inTable("student");
    builder.integer("project_id").unsigned().references("project_id").inTable("project");
    builder.integer("scholarship");
    builder.primary(["student_id", "project_id"]);
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("project_student");
  return;
}
