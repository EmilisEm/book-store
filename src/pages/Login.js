import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import LinkButton from "../components/LinkButton";
import { useCookies } from "react-cookie";
import styles from "../styles/login.module.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const [cookies, setCookie] = useCookies(["user-token"]);
  const onSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        userName,
        password,
      });

      setUsername("");
      setPassword("");

      const { token, userId } = response.data;

      if (!token || !userId) {
        return;
      }
      setCookie("user-token", token);
      window.localStorage.setItem("userId", userId);

      alert("Loged in");
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        userName,
        password,
      });

      setUsername("");
      setPassword("");

      alert(response.data.message);
    } catch (err) {
      console.error(err);
    }
  };
  return !cookies["user-token"] ? (
    <div style={{ width: "100%" }}>
      <div className={styles.container}>
        <div className={styles.selector}>
          <LinkButton
            onClick={() => {
              setIsLogin(true);
            }}>
            Log in
          </LinkButton>
          <LinkButton
            onClick={() => {
              setIsLogin(false);
            }}>
            Sign up
          </LinkButton>
        </div>
        {isLogin ? (
          <Form
            name="Login"
            username={userName}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            onSubmit={onSubmitLogin}
            redirectMessage="Go to signup"
            redirectAction={() => setIsLogin(false)}
          />
        ) : (
          <Form
            name="Register"
            username={userName}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            onSubmit={onSubmitSignup}
            redirectMessage="Go to login"
            redirectAction={() => setIsLogin(true)}
          />
        )}
      </div>
    </div>
  ) : (
    <Profile />
  );
};

const Profile = () => {
  const [cookies, setCookie] = useCookies(["user-token"]);

  const logout = () => {
    window.localStorage.removeItem("userId");
    setCookie("user-token", "");
    console.log(cookies["user-token"]);
  };
  return (
    <div>
      PROFILE TO BE ADDED
      <LinkButton onClick={logout}>Log out</LinkButton>
    </div>
  );
};
export default Login;
