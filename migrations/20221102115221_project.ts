import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("project", (builder) => {
    builder.increments("project_id");
    builder.string("name").notNullable();
    builder.string("NCCU_id").unique();
    builder.string("MOST_id").unique();
    builder.date("exec_time_start");
    builder.date("exec_time_end");
    builder.date("active_time_start");
    builder.date("active_time_end");
  });
  return;
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("project");
  return;
}
