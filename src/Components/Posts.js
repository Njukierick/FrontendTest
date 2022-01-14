import React from "react";
import './Post.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="searchResultDiv">
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h4>{post.reporting_org_narrative}</h4>
            <a href=" https://example.com/ + {post.iati_identifier}">{post.title_narrative}</a>
            <p className="description">{post.description_narrative}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
