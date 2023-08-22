import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "../mocks/topics.js";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((TopicItem) => {
        return (
          <TopicListItem
            key={TopicItem.id}
            slug={TopicItem.slug}
            title={TopicItem.title}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
