import React, { useState } from "react";
import { Authentication, User } from "../types";
import { client } from "../utils";

const localStorageKey = "__auth_provider_token__";

export const AuthContext = React.createContext<Authentication>(
  {} as Authentication
);
const initUser = {
  id: "1",
  name: "John",
  email: "John@John.John",
  phoneNumber: "+201454877877",
};
export function AuthProvider(props: any) {
  const [user, setUser] = useState<User | null>(initUser);

  const isLoggedIn = !!user;

  function handleUserResponse(userData: User) {
    setUser(userData);
    window.localStorage.setItem(localStorageKey, userData.token || "");
  }

  function login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    return client("login", { data: { username, password } }).then((userData) =>
      handleUserResponse(userData)
    );
  }

  function register(userData: User) {
    return client("register", { data: userData }).then(handleUserResponse);
  }

  async function logout() {
    window.localStorage.removeItem(localStorageKey);
  }

  const value = {
    user,
    login,
    register,
    logout,
    isLoggedIn,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useUser must be used within a AuthProvider");
  }
  return context;
}
