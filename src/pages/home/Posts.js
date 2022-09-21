import React, { useState, useEffect } from "react";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    requestPosts();
  }, []);

  async function requestPosts() {
    const res = await fetch("https://young-mesa-82569.herokuapp.com/posts");
    const json = await res.json();
    setPosts(json);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {" "}
        <h1>Blog posts</h1>
      </div>
      <div className={styles.posts}>
        {posts
          .filter((post) => post.display)
          .map((post) => (
            <Post
              title={post.title}
              author={post.user.username}
              date={post.createdAt}
              key={post._id}
              id={post._id}
            />
          ))}
      </div>
    </div>
  );
};

export default Posts;
