import React from "react";
import "../styles/PhotoList.scss";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from "./PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { modalId, favImagesArr, photos } = props;
  const photo = photos.filter((photo) => photo.id === modalId);
  const similarPhotos = Object.values(photo[0].similar_photos);

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

      <div className="photo-details-modal__images">
        <PhotoFavButton
          isFav={props.isFav}
          id={photo[0].id}
          favImagesArr={favImagesArr}
        />
        <img
          className="photo-details-modal__image "
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
                favImagesArr={favImagesArr}
                isFav={props.isFav}
                profile={photoItem.user.profile}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
