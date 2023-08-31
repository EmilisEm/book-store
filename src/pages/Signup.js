import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {
        userName,
        password,
      });

      alert("Registration complete. Please Log in");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Form
        name="Register"
        username={userName}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        onSubmit={onSubmit}></Form>
    </div>
  );
};

export default Signup;
