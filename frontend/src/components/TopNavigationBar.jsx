import React from "react";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const inputChange = (event) => props.handleChange(event.target.value);
  const selectChange = (event) => props.handleChange2(event.target.value);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
        <select onChange={selectChange}>
          <option>City</option>
          <option>Country</option>
          <option>Username</option>
        </select>
        <input onChange={inputChange}></input>
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
