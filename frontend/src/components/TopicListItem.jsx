import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title } = props;
  return (
    <div className="topic-list__item">
      <span id={id}>{title}</span>
    </div>
  );
};

export default TopicListItem;
