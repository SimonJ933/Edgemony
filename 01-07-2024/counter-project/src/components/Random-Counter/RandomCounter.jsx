import React, { useState } from "react";
import "./RandomCounter.css";
const RandomNumberGenerator = () => {
  const [number, setNumber] = useState();

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  return (
    <div className="random-counter">
      <button className="btn-random" onClick={generateRandomNumber}>
        Genera Numero
      </button>
      {number !== null && <p>Numero generato: {number}</p>}
    </div>
  );
};

export default RandomNumberGenerator;
