import React, { useState, useEffect } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  const { favImagesArr, id } = props;
  const [selected, setSelected] = useState(
    favImagesArr.includes(id) ? true : false
  );

  const handleClick = () => {
    setSelected(!selected);
    selected === true ? props.isFav(false, id) : props.isFav(true, id);
  };

  useEffect(() => {
    favImagesArr.includes(id) ? setSelected(true) : setSelected(false);
  }, [handleClick]);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
