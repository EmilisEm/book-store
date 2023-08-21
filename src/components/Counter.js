import React from "react";
import styles from "../styles/counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Counter = ({
  count,
  setCount,
  maxCount,
  setIsError,
  setErrorMessage,
}) => {
  const handleValueChange = (e) => {
    let value = e.target.value;

    if (value > maxCount || value < 1) {
      setErrorMessage("Invalid item count!");
      setIsError(true);
      return;
    }

    setCount(value);
  };

  const handleCountChange = (change) => {
    if (change === "up" && count < maxCount) {
      setCount(parseInt(count) + 1);
    } else if (change === "down" && count > 1) {
      setCount(parseInt(count) - 1);
    } else {
      setErrorMessage("Invalid item count!");
      setIsError(true);
      return;
    }
  };
  return (
    <div className={styles.counterContainer}>
      <input
        className={styles.counter}
        type="number"
        onChange={handleValueChange}
        value={count}
      ></input>
      <FontAwesomeIcon
        className={styles.counterArrowDown}
        icon={faArrowDown}
        onClick={() => {
          handleCountChange("down");
        }}
      />
      <FontAwesomeIcon
        className={styles.counterArrowUp}
        icon={faArrowUp}
        onClick={() => {
          handleCountChange("up");
        }}
      />
    </div>
  );
};

export default Counter;
