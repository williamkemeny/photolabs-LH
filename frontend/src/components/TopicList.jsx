import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import useApplicationData from "../hooks/useApplicationData";

const TopicList = () => {
  const { topics, topicClick } = useApplicationData();
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((TopicItem) => {
        return (
          <TopicListItem
            key={TopicItem.id}
            id={TopicItem.id}
            slug={TopicItem.slug}
            title={TopicItem.title}
            topicClick={topicClick}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
