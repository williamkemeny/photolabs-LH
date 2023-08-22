import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";
import "../styles/HomeRoute.scss";

// Note: Rendering a single component to build components in isolation
const HomeRoute = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);
  const [favImagesArr, setFavImagesArr] = useState([]);

  const removeArrWithId = (arr, id) => {
    const arrWithIdIndex = arr.findIndex((arr) => arr === id);
    if (arrWithIdIndex > -1) {
      arr.splice(arrWithIdIndex, 1);
    }
    return arr;
  };

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
      <PhotoList isFav={isFav} />
    </div>
  );
};

export default HomeRoute;
