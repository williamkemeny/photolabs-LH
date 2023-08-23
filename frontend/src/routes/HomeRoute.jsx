import React from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";

import "../styles/HomeRoute.scss";

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={props.isFavPhotoExist} />
      <PhotoList
        isFav={props.isFav}
        pictureClick={props.pictureClick}
        favImagesArr={props.favImagesArr}
      />
    </div>
  );
};

export default HomeRoute;
