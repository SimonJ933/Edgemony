import styles from "./Thumbnail.module.css";

function ThumbNail({ thumbNail, onClick }) {
  return (
    <div className={styles.thumbNail} onClick={onClick}>
      <img src={thumbNail} />
    </div>
  );
}

export default ThumbNail;
// scrivi className={${classe1} ${classe2}}
