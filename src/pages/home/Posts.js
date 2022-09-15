import React, { useState, useEffect } from "react";
import Post from "./Post";
import styles from "./Posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    requestPosts();
  }, []);

  async function requestPosts() {
    const res = await fetch("http://localhost:3000/posts");
    const json = await res.json();
    setPosts(json);
  }

  console.log(posts);

  return (
    <div>
      <h1 className={styles.title}>Blog posts</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
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
