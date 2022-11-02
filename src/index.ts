import Express from "express";
import knex from "./db";

const app = Express();
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

app.listen(1337, () => {
  console.log("Server Running");
});