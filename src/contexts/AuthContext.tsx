import { createContext, ReactNode, useEffect, useState } from "react";
import axios from 'axios';

export type User = {
  id: string;
  name: string;
}

type AuthContextType = {
  user: User | undefined;
  setUser: (user: User) => void;
  getValidUser: () => Promise<User[]>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  async function getValidUser() {
    const response = await axios.get("http://assignment.bunq.com/users")
    return response.data
  }


  return (
    <AuthContext.Provider value={{ user, setUser, getValidUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}