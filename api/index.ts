import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { AuthRoute } from "./routes";
import cors from "cors";
import e from "express";

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT;
app.use(bodyParser.json());

// Routes
app.use("/auth", AuthRoute);

const validateEnvVars = () => {
  const errors = [];
  if (!process.env.PORT) errors.push("PORT");
  if (!process.env.COSMOS_CONNECTION_STRING)
    errors.push("COSMOS_CONNECTION_STRING");

  if (errors.length > 0) {
    console.error(
      `The following env vars are not configured: ${errors.toString()}`
    );
  } else {
    console.log(process.env.PORT);
    console.log(process.env.COSMOS_CONNECTION_STRING);
  }
  // handle what to do in case ENV VARS not configured
};

validateEnvVars();
// app.use(cors({ origin: "http://localhost:5173/" }));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
