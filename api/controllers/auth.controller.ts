import { Request, Response } from "express";
import { AuthService } from "../services";
import { Utils } from "../utils";

const signUp = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const errorMessage = await validateSignUp(email);
    if (errorMessage) return res.status(400).json({ error: errorMessage });

    await AuthService.signUp(req);
    return res.json("success");
  } catch (error) {
    return res.json(error);
  }
};

const validateSignUp = async (email: string) => {
  if (!Utils.isValidEmail(email)) return "Invalid email address.";

  const emailExist = await AuthService.isEmailExists(email);
  if (emailExist) return "The provided email already exist.";

  return "";
};

const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const errorMessage = await validateSignIn(email, password);
    if (errorMessage) return res.status(400).json({ error: errorMessage });

    const data = await AuthService.signIn(req);
    return res.json("success");
  } catch (error) {
    return res.json(error);
  }
};

const validateSignIn = async (email: string, password: string) => {
  const foundByEmailAndPassword = await AuthService.foundByEmailAndPassword(
    email,
    password
  );
  if (!foundByEmailAndPassword)
    return "Invalid login credentials, please try again.";

  return "";
};

export default { signUp, signIn };
