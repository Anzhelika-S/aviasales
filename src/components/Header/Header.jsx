import Logo from "../../img/Logo.svg";

import styles from "./Header.module.scss";

function Header() {
  return (
    <h1 className={styles.header}>
      <img src={Logo} alt="Logo" />
    </h1>
  );
}

export default Header;
