import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { city, country, username, imageSource, profile, id } = props;

  const handleClick = () => {
    props.pictureClick(id);
  };

  return (
    <li className="photo-list__item">
      <PhotoFavButton
        isFav={props.isFav}
        id={id}
        favImagesArr={props.favImagesArr}
      />
      <img
        className="photo-list__image"
        src={imageSource}
        alt=""
        onClick={handleClick}
      />

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={"profile img for " + username}
        />
        <div>
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-info photo-list__user-location ">
            {city + ", "}
            {country}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
