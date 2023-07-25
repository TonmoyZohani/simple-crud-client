import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;

    const newUser = { name, email };
    console.log(newUser);

    setUsers([...users, newUser]);

    const url = "http://localhost:5000/users";

    const headers = {
      "Content-type": "application/json",
    };

    axios
      .post(url, newUser, { headers })
      .then((res) => console.log(res.data))
      .then((data) => console.log(data));

    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  return (
    <>
      <h2>Simple CRUD</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" /> <br />
        <label htmlFor="email">Email</label>{" "}
        {/* Corrected the "htmlFor" attribute */}
        <input type="email" name="email" /> <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
