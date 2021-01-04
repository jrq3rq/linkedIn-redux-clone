import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && (
        <Avatar className="headerOptions__icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="HeaderOptions__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
