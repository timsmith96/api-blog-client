import React, { useState, useEffect } from "react";
import styles from "./PostDetail.module.css";
import { useParams, Link } from "react-router-dom";
import backicon from "../../assets/icons/back.svg";
import nl2br from "react-nl2br";
import { DateTime } from "luxon";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    requestPost();
  }, []);

  async function requestPost() {
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    const json = await res.json();
    setPost(json);
    setLoading(false);
  }

  const { title, user, comments, text, createdAt } = post;

  if (loading) {
    return <h2>loading</h2>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
          {" "}
          <img src={backicon} alt="back icon. Click to go back." /> Back
        </Link>
        <div>
          <p className={styles.category}>{user.username}</p>
          <h1>{title}</h1>
        </div>
      </div>
      <div className={styles.post_text}>
        <em id={styles.date}>
          {DateTime.fromISO(createdAt).toFormat("MMM d, y")}
        </em>
        <p>{nl2br(text)}</p>
      </div>
    </div>
  );
};

export default PostDetail;
