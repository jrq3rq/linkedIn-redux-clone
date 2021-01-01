import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./HeaderElements.css";
import HeaderOptions from "../HeaderOptions/HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
          alt=""
        />
        <div className="header__search">
          {/* search icon */}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="My Network" />
        <HeaderOptions Icon={ChatIcon} title="My Network" />
        <HeaderOptions Icon={NotificationsIcon} title="My Network" />
        <HeaderOptions
          avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8tbzl1ZElnBhCLLdKSi2JwfaB7EgMVen3gISreuA=s64-c-mo"
          title="Me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
