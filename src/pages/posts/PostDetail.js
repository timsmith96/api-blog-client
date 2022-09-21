import React, { useState, useEffect } from "react";
import styles from "./PostDetail.module.css";
import { useParams, Link } from "react-router-dom";
import backicon from "../../assets/icons/back.svg";
import nl2br from "react-nl2br";
import { DateTime } from "luxon";
import Comment from "./Comment";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setcommentText] = useState();
  useEffect(() => {
    requestPost();
  }, []);

  async function requestPost() {
    const res = await fetch(
      `https://young-mesa-82569.herokuapp.com/posts/${id}`
    );
    const json = await res.json();
    setPost(json);
    setLoading(false);
  }

  const handleSubmit = async () => {
    await fetch(`https://young-mesa-82569.herokuapp.com/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: commentText,
      }),
    });
    window.location.reload();
  };

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
      <div className={styles.comments}>
        <h2>Comments</h2>
        <ul className="">
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              text={comment.text}
              createdAt={comment.createdAt}
            />
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <textarea
            name="comment"
            id="comment"
            cols="40"
            rows="5"
            onChange={(e) => setcommentText(e.target.value)}
          ></textarea>
          <button type="submit">Add comment</button>
        </form>
      </div>
    </div>
  );
};

export default PostDetail;
