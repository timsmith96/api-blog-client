import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.title}>
          <Link to="/">Teapot blog</Link>
        </li>
      </ul>
    </nav>
  );
}
