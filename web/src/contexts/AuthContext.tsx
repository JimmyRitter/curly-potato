import * as React from "react";

interface AuthContextType {
  user: any;
  signIn: (
    email: string,
    password: string,
    callback: (result: any) => void
  ) => void;
  signUp: (
    email: string,
    password: string,
    callback: (result: any) => void
  ) => void;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext;
