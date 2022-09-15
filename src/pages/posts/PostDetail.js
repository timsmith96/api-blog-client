import React, { useState, useEffect } from "react";
import styles from "./PostDetail.module.css";
import { useParams } from "react-router-dom";

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

  const { title, user, comments } = post;

  if (loading) {
    return <h2>loading</h2>;
  }
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h1>{user.username}</h1>
      {comments.map((comment) => (
        <h1 key={comment.id}>{comment.text}</h1>
      ))}
    </div>
  );
};

export default PostDetail;
