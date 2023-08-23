import React, { useState, useEffect } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import removeArrWithId from "../helper/removeArrWithId";
import "../styles/HomeRoute.scss";

// Note: Rendering a single component to build components in isolation
const HomeRoute = (props) => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);
  const [favImagesArr, setFavImagesArr] = useState([]);

  const isFav = (on, id) => {
    on === true
      ? setFavImagesArr([...favImagesArr, id])
      : setFavImagesArr(removeArrWithId(favImagesArr, id));
    if (favImagesArr.length === 0) {
      setIsFavPhotoExist(false);
    }
  };

  useEffect(() => {
    if (favImagesArr.length > 0) {
      setIsFavPhotoExist(true);
    }
  }, [favImagesArr]);

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList isFav={isFav} pictureClick={props.pictureClick} />
    </div>
  );
};

export default HomeRoute;
