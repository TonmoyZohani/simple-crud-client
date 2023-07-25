import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      <div>{users.length}</div>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </>
  );
};

export default Users;
