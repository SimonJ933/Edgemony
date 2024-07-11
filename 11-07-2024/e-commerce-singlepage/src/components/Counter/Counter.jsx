import styles from "./Counter.module.css";
import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  const handleClick = (event) => {
    return event.target.id === "add" ? setCounter(counter + 1) : setCounter(counter - 1);
  };
  return (
    <div className={styles.counter}>
      <button disabled={counter === 0} id="sub" onClick={(event) => handleClick(event)}>
        -
      </button>
      {counter}
      <button disabled={counter === 10} id="add" onClick={(event) => handleClick(event)}>
        +
      </button>
    </div>
  );
}

export { Counter };
