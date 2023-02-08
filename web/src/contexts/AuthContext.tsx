import * as React from "react";

interface AuthContextType {
  user: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext;
