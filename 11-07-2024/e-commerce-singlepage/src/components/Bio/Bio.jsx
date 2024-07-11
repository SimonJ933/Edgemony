import React from "react";
import styles from "./Bio.module.css";
import { Button } from "../Button/Button.jsx";
import { Counter } from "../Counter/Counter.jsx";

function Bio() {
  return (
    <div className={styles.bio_container}>
      <h1>TORO SCATENATO</h1>
      <h2>
        Nell’America di fine anni ’40, un pugile chiamato Jake La Motta (interpretato da Robert De Niro), soprannominato in seguito toro scatenato per l’abilità
        di dare e incassare colpi, proveniente dai luoghi violenti, razzisti e maschilisti del bronx americano.
      </h2>
      <h1>20,99€</h1>
      <div className={styles.btn_container}>
        <Counter />
        <Button />
      </div>
    </div>
  );
}

export { Bio };
