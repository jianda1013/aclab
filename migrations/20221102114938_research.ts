import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("student_paper", (builder) => {
    builder.integer("student_id").unsigned().references("student_id").inTable("student").notNullable();
    builder.integer("paper_id").unsigned().references("paper_id").inTable("paper").notNullable();
    builder.boolean("graduation").defaultTo(false);
    builder.primary(["student_id", "paper_id"]);
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("student_paper");
  return;
}
