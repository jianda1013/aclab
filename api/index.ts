import Express from "express";
import routes from "./routes";

const app = Express();
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

if (process.env.DEPLOY_MODE !== "test")
  app.listen(1337, () => {
    console.log("Server Running");
  });

routes(app);

export default app;
