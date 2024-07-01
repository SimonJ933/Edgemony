import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleClick = (event) => {
    return event.target.id === "add" ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <button className="btn" disabled={counter === 0} id="sub" onClick={(event) => handleClick(event)}>
        -
      </button>
      Counter:{counter}
      <button className="btn" disabled={counter === 10} id="add" onClick={(event) => handleClick(event)}>
        +
      </button>
    </div>
  );
}

export { Counter };
