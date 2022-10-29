import Express from "express";

const app = Express();
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

app.listen(1337);
