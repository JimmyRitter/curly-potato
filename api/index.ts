import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { AuthRoute } from "./routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT;
app.use(bodyParser.json());

// Routes
app.use("/auth", AuthRoute);

// app.use(cors({ origin: "http://localhost:5173/" }));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
