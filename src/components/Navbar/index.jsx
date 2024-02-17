import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import Logo from "../../assets/marvel-logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link to="/" className={styles.navbarHeader}>
        <img src={Logo} alt="Marvel Logo" className={styles.navbarLogo} />
      </Link>
    </div>
  );
};

export default Navbar;
