import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/#home" className={styles.brand} aria-label="Albert Castillo, home">
        AC
      </Link>
      <ul className={styles.navbarList}>
        <li><Link to="/#home" className={styles.navLink}>Home</Link></li>
        <li><Link to="/#projects" className={styles.navLink}>Projects</Link></li>
        <li><Link to="/#about" className={styles.navLink}>About</Link></li>
        <li><Link to="/#contact" className={styles.navLink}>Contact</Link></li>
        <li><Link to="/resume" className={styles.navLink}>Resume</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
