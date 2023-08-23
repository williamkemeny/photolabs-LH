import React from "react";
import "../styles/PhotoList.scss";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "../components/PhotoListItem";
import photos from "../mocks/photos.js";

const PhotoDetailsModal = (props) => {
  const { modalId, favImagesArr } = props;
  const photo = photos.filter((photo) => photo.id === modalId);
  const similarPhotos = Object.values(photo[0].similarPhotos);

  return (
    <div className="photo-details-modal">
      <div>
        <button className="photo-details-modal__close-button">
          <img
            src={closeSymbol}
            alt="close symbol"
            onClick={props.pictureClick}
          />
        </button>
      </div>

      <span className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={photo[0].urls.regular}
          alt=""
        />
        <div className="photo-list__user-details">
          <img
            className="photo-list__user-profile"
            src={photo[0].user.profile}
            alt={"profile img for " + photo[0].user.username}
          />
          <div>
            <p className="photo-list__user-info">{photo[0].user.username}</p>
            <p className="photo-list__user-info photo-list__user-location ">
              {photo[0].location.city + ", "}
              {photo[0].location.country}
            </p>
          </div>
        </div>
        <ul className="photo-list">
          {similarPhotos.map((photoItem) => {
            return (
              <PhotoListItem
                key={photoItem.id}
                id={photoItem.id}
                city={photoItem.location.city}
                country={photoItem.location.country}
                username={photoItem.user.username}
                imageSource={photoItem.urls.full}
                profile={photoItem.user.profile}
              />
            );
          })}
        </ul>
      </span>
    </div>
  );
};

export default PhotoDetailsModal;
