import posts from "../../data.json";
import styles from "./button.module.css";

function Button(props) {
  const { setAdvice } = props;
  const generateRandomAdvice = () => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomAdvice = posts[randomIndex];
    setAdvice(randomAdvice);
  };

  return (
    <div className={styles.container}>
      <div className={styles.diceContainer}>
        <button className={styles.btnrandom} onClick={generateRandomAdvice}>
          <img className={styles.img} src="icon-dice.svg"></img>
        </button>
      </div>
    </div>
  );
}

export { Button };
