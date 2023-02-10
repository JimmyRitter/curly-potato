import { Request, Response } from "express";
import crypto from "crypto";
import { connectToDb, closeDbConnection } from "../services/db.service";

export const signUp = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const { client, db } = await connectToDb();

    console.log("connected to db", db);
    console.log("client", client);

    const { email, password } = req.body;

    const passwordHash = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user = {
      email,
      password: passwordHash,
    };

    // const db = dbService.getDb();
    await db.collection("users").insertOne(user);
    return res.json({ user });

    // Save the user to the database
    // User.create(user, (error, user) => {
    // if (error) {
    // return res.status(400).json({ error });
    // }
    return res.json({ user });
    // });
  } catch (error) {
    return res.json(error);
  }
};

export default { signUp };
