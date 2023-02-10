import { MongoClient } from "mongodb";
import { dbConfig } from "../config/db";

export const connectToDb = async (): Promise<any> => {
  const client = await MongoClient.connect(dbConfig.connectionString);
  const db = client.db(dbConfig.dbName);

  return { client, db };
};

export const closeDbConnection = async (client: MongoClient): Promise<void> => {
  try {
    await client.close();
  } catch (error) {
    console.error("Error closing the database connection:", error);
    throw error;
  }
};
