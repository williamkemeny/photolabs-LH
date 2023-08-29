import React from "react";
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        onTopicSelect={props.topicSelected}
        isFavPhotoExist={props.isFavPhotoExist}
        topics={props.topics}
        topicClick={props.topicClick}
        handleChange={props.handleChange}
        handleChange2={props.handleChange2}
      />
      <PhotoList
        isFav={props.isFav}
        pictureClick={props.pictureClick}
        favImagesArr={props.favImagesArr}
        topicPhotos={props.topicPhotos}
        topicSelected={props.topicSelected}
        searchBar={props.searchBar}
        selectOption={props.selectOption}
      />
    </div>
  );
};

export default HomeRoute;
