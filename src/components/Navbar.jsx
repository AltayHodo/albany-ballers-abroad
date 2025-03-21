import { Link } from "react-router-dom"
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

  return(
    <nav className={styles.nav}>
      <h1>Albany Ballers Abroad</h1>

      <div className={styles.navLinks}>
        <Link to="/">Home page</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>

  )
}