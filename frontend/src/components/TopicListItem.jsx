import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const handleClick = () => {
    props.topicClick(props.topicId);
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleClick}>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
