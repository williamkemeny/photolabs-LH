import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import useApplicationData from "../hooks/useApplicationData";

//comment
const PhotoList = (props) => {
  const { photos } = useApplicationData();
  let loadPhotos = props.topicSelected ? props.topicPhotos : photos;
  return (
    <ul className="photo-list">
      {loadPhotos.map((photoItem) => {
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
