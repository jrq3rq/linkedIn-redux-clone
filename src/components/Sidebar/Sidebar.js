import React from "react";
import "./SidebarElements.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.diplayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <div className="sidebar__statNumber">1,411</div>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <div className="sidebar__statNumber">4,144</div>
        </div>
      </div>
      <div className="sidebar__botton">
        <p>Recent</p>
        {recentItem("raectjs")}
        {recentItem("voicedesign")}
        {recentItem("vux")}
        {recentItem("jungianarchetypes")}
        {recentItem("fullstack")}
        {recentItem("business")}
      </div>
    </div>
  );
};

export default Sidebar;
