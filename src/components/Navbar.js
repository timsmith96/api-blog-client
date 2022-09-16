import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import dropdown from "../assets/icons/dropdown.svg";
import diagonalup from "../assets/icons/diagonalup.svg";
import magnify from "../assets/icons/magnify.svg";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h4>Tim Smith</h4>
        </div>
        <ul className={styles.navcenter}>
          <li>
            <a href="#">
              <p>Podcast</p>
              <img
                src={dropdown}
                alt="dropdown icon. Click for more options"
              ></img>
            </a>
          </li>
          <li>
            <a href="#">
              Blog
              <img
                src={dropdown}
                alt="dropdown icon. Click for more options"
              ></img>
            </a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <div className={styles.verticalline}></div>
          <li>
            <a href="#">
              Shop
              <img
                src={diagonalup}
                alt="diagonal up icon. Click for more options"
              ></img>
            </a>
          </li>
          <li>
            <a href="#">
              App
              <img
                src={diagonalup}
                alt="diagonal up icon. Click for more options"
              ></img>
            </a>
          </li>
          <div className={styles.verticalline}></div>
          <a href="#">Login</a>
        </ul>
        <div className={styles.navbtns}>
          <button className={styles.newsletterbtn}>Get the Newsletter</button>
          <button className={styles.membershipbtn}>Subscribe</button>
          <button id={styles.magnify}>
            <img src={magnify} alt="magnifying glass" />
          </button>
        </div>
      </nav>
      {/* <div className={styles.horizontalline}></div> */}
    </header>
  );
}
