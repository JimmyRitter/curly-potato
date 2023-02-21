import { Request } from "express";
import crypto from "crypto";
import { connectToDb, closeDbConnection } from "../services/db.service";
import { AuthUserDataModel } from "../models";
import { DbCollections } from "../config/db";

const signUp = async (req: Request) => {
  const { client, db } = await connectToDb();
  try {
    const { email, password } = await req.body;

    const passwordHash = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const userData: AuthUserDataModel = {
      email,
      password: passwordHash,
    };

    await db.collection(DbCollections.USERS).insertOne(userData);
    return;
  } catch (error) {
    throw error;
  } finally {
    await closeDbConnection(client);
  }
};

const isEmailExists = async (email: string): Promise<boolean> => {
  const { client, db } = await connectToDb();
  try {
    const user = await db.collection(DbCollections.USERS).findOne({ email });

    return user !== null;
  } catch (error) {
    throw error;
  } finally {
    await closeDbConnection(client);
  }
};

const signIn = async (req: Request) => {
  // const { client, db } = await connectToDb();
  try {
    return "success - figure what to do now that email and password are valid";
  } catch (error) {
    throw error;
  } finally {
    // await closeDbConnection(client);
  }
};

const foundByEmailAndPassword = async (
  email: string,
  password: string
): Promise<boolean> => {
  const { client, db } = await connectToDb();
  try {
    const passwordHash = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const userData: AuthUserDataModel = {
      email,
      password: passwordHash,
    };

    const user = await db.collection(DbCollections.USERS).findOne(userData);

    return user !== null;
  } catch (error) {
    throw error;
  } finally {
    await closeDbConnection(client);
  }
};

export default { signUp, signIn, isEmailExists, foundByEmailAndPassword };
