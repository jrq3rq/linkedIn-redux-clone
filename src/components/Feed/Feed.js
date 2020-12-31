import React from "react";
import "./FeedElements.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "../Input/InputOption";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="#70b5f9" />
          <InputOption
            Icon={SubscriptionsIcon}
            title="subscription"
            color="#E7A33F"
          />
          <InputOption Icon={EventNoteIcon} title="event" color="#A0B4B7" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="calendar"
            color="#F5987E"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
