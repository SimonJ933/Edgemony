import React from "react";
import styles from "./card.module.css";
import { Button } from "../Button/Button";

function Card(props) {
  const { title, body, setAdvice } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{body}</p>
      <img className={styles.divisor} src="pattern-divider-desktop.svg" />
      <Button setAdvice={setAdvice} />
    </div>
  );
}

export { Card };
