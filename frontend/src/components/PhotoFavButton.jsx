import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    selected === true
      ? props.isFav(false, props.id)
      : props.isFav(true, props.id);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
