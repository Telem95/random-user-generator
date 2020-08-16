import React, { useEffect, useContext } from "react";
import { Context as UserContext } from "../context/UserContext";

const LoadingScreen = ({ navigation }) => {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return null;
};

export default LoadingScreen;
