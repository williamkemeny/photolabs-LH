import React from "react";
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={props.isFavPhotoExist} />
      <PhotoList
        isFav={props.isFav}
        pictureClick={props.pictureClick}
        favImagesArr={props.favImagesArr}
        topicPhotos={props.topicPhotos}
        topicSelected={props.topicSelected}
      />
    </div>
  );
};

export default HomeRoute;
