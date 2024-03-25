import axios from "axios";
import { useState } from "react";
export const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};
export default function AuthUser() {
  const [token, setToken] = useState();
  // const getToken = () => {
  //   const tokenString = sessionStorage.getItem("token");
  //   const userToken = JSON.parse(tokenString);
  //   return userToken;
  // };
  // const [token, setToken] = useState(getToken());
  const saveToken = (token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    //sessionStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    //setUser(user);
  };
  const http = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    setJWTToken: saveToken,
    //token,
    // getToken,
    http,
  };
}
