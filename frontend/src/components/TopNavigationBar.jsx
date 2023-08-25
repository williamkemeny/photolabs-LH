import React from "react";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
        <TopicList
          topics={props.topics}
          onTopicSelect={props.onTopicSelect}
          topicClick={props.topicClick}
        />
        <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigation;
