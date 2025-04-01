import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>Albany Ballers Abroad</h1>

      <div className={styles.navLinks}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ""}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ""}>Contact</NavLink>
        <NavLink to="/donate" className={({ isActive }) => isActive ? styles.activeLink : ""}>Donate</NavLink>
      </div>
    </nav>
  );
}
