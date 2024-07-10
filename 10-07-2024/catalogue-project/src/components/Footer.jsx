import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_container}>
        <img src="Ryu 2.gif" alt="Ryu" className={styles.logo} />
      </div>
      <div className={styles.footer_container}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>ABOUT US</li>
          <li className={styles.nav_item}>CONTACT US</li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
