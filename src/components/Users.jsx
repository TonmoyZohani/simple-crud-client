import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log(_id);

    axios
      .delete(`http://localhost:5000/users/${_id}`)
      .then((res) => console.log("User deleted successfully", res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>{users.length}</div>
      {users.map((user) => (
        <p key={user._id} onClick={() => handleDelete(user._id)}>
          {" "}
          {user._id} : {user.name} -{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(user._id)}
          >
            Button
          </span>
        </p>
      ))}
    </>
  );
};

export default Users;
