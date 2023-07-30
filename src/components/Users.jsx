import React, { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  console.log(users);

  const handleDelete = (_id) => {
    console.log(_id);

    const newUsers = users.filter((user) => user._id !== _id);

    setUsers(newUsers);

    console.log(newUsers);

    axios
      .delete(`http://localhost:5000/users/${_id}`)
      .then((res) =>
        res.status === 200
          ? Swal.fire({
              title: "Success!",
              text: "User deleted successfully",
              icon: "success",
              confirmButtonText: "Cool",
            })
          : Swal.fire({
              title: "Error!",
              text: "Failed to delete user",
              icon: "error",
              confirmButtonText: "Okay",
            })
      )
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>{users.length}</div>
      {users.map((user) => (
        <div style={{ border: "2px solid red" }}>
          <p key={user._id} onClick={() => handleDelete(user._id)}>
            {" "}
            {user._id} : {user.name} -{" "}
            <span
              style={{
                cursor: "pointer",
                backgroundColor: "red",
                color: "white",
                padding: "4px",
                borderRadius: "4px",
              }}
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </span>
          </p>
        </div>
      ))}
    </>
  );
};

export default Users;
