import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((TopicItem) => {
        return (
          <TopicListItem
            key={TopicItem.id}
            topicId={TopicItem.id}
            slug={TopicItem.slug}
            title={TopicItem.title}
            onTopicSelect={props.onTopicSelect}
            topicClick={props.topicClick}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
