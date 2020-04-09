import React, {useEffect, useState} from "react";
// STYLES //
import "./postings.css";
// COMPONENTS //
import {Typography} from '@material-ui/core';
import PostList from "../components/PostingList";

const POSTINGS_API_URL = "http://localhost:5000/postings";

const fetchPostings = async (updateCB) => {
  const response = await fetch(POSTINGS_API_URL);
  const json = await response.json();

  updateCB(json);
};

const Postings = () => {
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    fetchPostings(setPostings);
  }, [])

  return (
    <div className={"posting-list"}>
      <Typography variant={"h4"} component={"h1"} className={"posting-list__header"}>Entry Level Software Jobs</Typography>
      <PostList postings={postings}/>
    </div>
  );
};

export default Postings;
