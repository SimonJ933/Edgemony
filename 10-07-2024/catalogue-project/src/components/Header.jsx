import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo_container}>
        <img src="Ryu 1.gif" alt="Ryu" className={styles.logo} />
      </div>
      <div className={styles.header_container}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>HOME</li>
          <li className={styles.nav_item}>CHARACTERS</li>
          <li className={styles.nav_item}>GAME-FRANCHISE</li>
        </ul>
      </div>
    </header>
  );
}

export { Header };
