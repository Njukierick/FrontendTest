import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./Components/Posts";
import SearchBar from "./Components/SearchBar";
import DataSets from "./Components/Data.json";
import Pagination from "./Components/Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get("covid.json")
      .then((response) => {
        console.log(response.data.response.docs);
        setPosts(response.data.response.docs);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="searchResultDiv">
      <SearchBar placeholder="search..." data={DataSets} />
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
