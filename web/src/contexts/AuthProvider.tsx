import * as React from "react";
import AuthContext from "./AuthContext";
import { fakeAuthProvider } from "../auth";
import { AuthService } from "../services";

interface Props {
  children: React.ReactNode;
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let signIn = async (
    email: string,
    password: string,
    callback: (result: string) => void
  ) => {
    const result = await AuthService.signIn(email, password);
    if (result.success) {
      setUser(email);
    }
    callback(result);
  };

  let signUp = async (
    email: string,
    password: string,
    callback: (result: string) => void
  ) => {
    const result = await AuthService.signUp(email, password);
    if (result.success) {
      setUser(email);
    }
    callback(result);
  };

  let signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signIn, signUp, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
