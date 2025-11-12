import React from "react";
import Login from "../components/Login";

export default function LoginPage({ setUser }) {
  // Simply pass setUser down to Login
  return <Login setUser={setUser} />;
}
