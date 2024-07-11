import styles from "./Header.module.css";

import React from "react";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src=".\src\assets\Images\Blockbuster1.webp" />
      </div>
      <div className={styles.nav}>
        <ul className={styles.navlist}>
          <li>HOME</li>
          <li>ACTION</li>
          <li>ADVENTURE</li>
          <li>HORROR</li>
          <li>SCI-FI</li>
        </ul>
      </div>
    </div>
  );
}

export { Header };
