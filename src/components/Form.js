import React from "react";
import Button from "./Button";
import styles from "../styles/form.module.css";

const Form = ({
  name,
  onSubmit,
  username,
  password,
  setUsername,
  setPassword,
  redirectMessage,
  redirectAction,
}) => {
  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}>
      <h2 className={styles.formTitle}>{name}</h2>
      <div className={styles.formControl}>
        <label htmlFor="username">Username: </label>
        <input
          required
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>

      <div className={styles.formControl}>
        <label htmlFor="password">Password: </label>
        <input
          required
          id="password"
          type="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className={styles.continue}>
        <Button
          className={styles.submit}
          type="submit">
          {name}
        </Button>
        <Button
          type="button"
          onClick={redirectAction}>
          {redirectMessage}
        </Button>
      </div>
    </form>
  );
};

export default Form;
