import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  console.log(user);

  return <div>{user.name}</div>;
};

export default Update;
