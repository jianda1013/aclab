import request from "supertest";
import knex from "../src/db";
import app from "../src/index";

beforeAll(async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  return;
});

describe("login", () => {
  it("POST /login", async () => {
    let res = await request(app)
      .post("/login")
      .send({ username: "seed", password: "seed" })
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    expect(1 + 1).toBe(2);
  });
});

// describe("", () => {});
