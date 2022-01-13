import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="searchResultDiv">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h4>{post.title}</h4>
            <p>{post.link}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
