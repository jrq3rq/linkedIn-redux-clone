import React from "react";
import "./PostElements.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import { Avatar } from "@material-ui/core";
import InputOption from "../Input/InputOption";

const Post = ({ name, description, message, photoURL }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
