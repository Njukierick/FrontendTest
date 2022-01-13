import React, { Component } from "react";
import DataSets from "../Data.json";
import "../App.css";

function SearchResult() {
  return (
    <div className="searchResultDiv">
      {DataSets.map((post) => {
        return (
          <div key={post.id} className="post">
            <h3>{post.reporting_org_narrative}</h3>
            <p>{post.iati_identifier}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
