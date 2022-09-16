import { DateTime } from "luxon";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import image from "../../assets/images/elephant.jpg";

const Post = ({ title, author, date, id }) => {
  return (
    <figure className={styles.post}>
      <Link to={`/posts/${id}`} title={title} author={author}>
        <img src={image} alt="zebra" />
        <figcaption>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED)}</p>
        </figcaption>
      </Link>
    </figure>
  );
};

export default Post;
