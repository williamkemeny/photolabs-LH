import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import useApplicationData from "../hooks/useApplicationData";

const PhotoList = (props) => {
  const checkSelectOption = (photo) => {
    if (props.selectOption === "City") {
      return photo.location.city
        .toLowerCase()
        .includes(props.searchBar.toLowerCase());
    }
    if (props.selectOption === "Country") {
      return photo.location.country
        .toLowerCase()
        .includes(props.searchBar.toLowerCase());
    }
    if (props.selectOption === "Username") {
      return photo.user.username
        .toLowerCase()
        .includes(props.searchBar.toLowerCase());
    }
  };
  const { photos } = useApplicationData();
  let loadPhotos = props.topicSelected ? props.topicPhotos : photos;
  let loadPhotosFiltered = loadPhotos.filter((photo) =>
    checkSelectOption(photo)
  );
  return (
    <ul className="photo-list">
      {loadPhotosFiltered.map((photoItem) => {
        return (
          <PhotoListItem
            key={photoItem.id}
            id={photoItem.id}
            city={photoItem.location.city}
            country={photoItem.location.country}
            username={photoItem.user.username}
            imageSource={photoItem.urls.full}
            profile={photoItem.user.profile}
            isFav={props.isFav}
            favImagesArr={props.favImagesArr}
            pictureClick={props.pictureClick}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
