import Express from "express";
import db from "./db";

const app = Express();
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

db.initialize();

app.listen(1337);
