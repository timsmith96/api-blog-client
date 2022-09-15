import { DateTime } from "luxon";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ title, author, date, id }) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <Link to={`/posts/${id}`} title={title} author={author}>
        View post
      </Link>
      <h4>{DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED)}</h4>
    </div>
  );
};

export default Post;
