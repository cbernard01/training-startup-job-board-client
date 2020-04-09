import React, {Fragment, useState} from "react";
// STYLES //
import "./PostItem.css";
// COMPONENTS //
import {Paper, Typography} from "@material-ui/core";
import PostingModal from "./PostingModal";

const PostItem = ({posting}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
    <PostingModal open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} posting={posting} />
    <Paper className={"posting-item__container"} onClick={handleClickOpen}>
      <div>
        <Typography className={"posting-item__title"} variant={"h5"}>{posting.title}</Typography>
        <Typography className={"posting-item__company"} variant={"h6"}>{posting.company}</Typography>
        <Typography className={"posting-item__location"} variant={"body1"}>{posting.location}</Typography>
      </div>
      <div>
        <Typography className={"posting-item__date"}>{posting.created_at.split(" ").slice(0,3).join(" ")}</Typography>
      </div>
    </Paper>
    </Fragment>
  );
};

export default PostItem;
