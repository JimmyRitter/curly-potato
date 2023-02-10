import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { AuthRoute } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());

// Routes
app.use("/auth", AuthRoute);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
