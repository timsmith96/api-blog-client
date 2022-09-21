import styles from "./Comment.module.css";
import { DateTime } from "luxon";

export default function Comment({ text, createdAt }) {
  return (
    <div className={styles.comment}>
      <h3>{text}</h3>
      <em id={styles.date}>
        {DateTime.fromISO(createdAt).toFormat("MMM d, y")}
      </em>
    </div>
  );
}
