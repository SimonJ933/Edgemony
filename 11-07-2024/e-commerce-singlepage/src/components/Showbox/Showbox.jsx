import styles from "./Showbox.module.css";

function ShowBox({ imgUrl }) {
  return (
    <div className={styles.showbox}>
      <img src={imgUrl} />
    </div>
  );
}

export default ShowBox;
