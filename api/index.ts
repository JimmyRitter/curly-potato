import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { AuthRoute } from "./routes";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/auth", AuthRoute);

// const url: string = process.env.COSMOS_CONNECTION_STRING!;
// const client = new MongoClient(url);

// async function main() {
//   await client.connect();

//   const db = client.db(`curly-potato-db`);
//   console.log(`New database:\t${db.databaseName}\n`);

//   const collection = db.collection("users");
//   console.log(`New collection:\t${collection.collectionName}\n`);

//   const indexResult = await collection.createIndex({ email: 1 });
//   console.log(`indexResult: ${JSON.stringify(indexResult)}\n`);

//   const newUser = {
//     email: "jimmy",
//     password: "123",
//   };

//   const newRecord = await collection.insertOne(newUser);

//   console.log(`newRecord: ${JSON.stringify(newRecord)}\n`);
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
