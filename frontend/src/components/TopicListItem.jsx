import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title } = props;

  const handleClick = () => {
    props.topicClick(id);
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleClick}>{title}</span>
    </div>
  );
};

export default TopicListItem;
