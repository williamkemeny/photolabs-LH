import React, { useState, useEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import removeArrWithId from "./helper/removeArrWithId";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);
  const [favImagesArr, setFavImagesArr] = useState([]);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalId, seModalId] = useState();

  const isFav = (on, id) => {
    on === true
      ? (favImagesArr.includes(id)? setFavImagesArr(favImagesArr) : setFavImagesArr([...favImagesArr, id]))
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

  const pictureClick = (id) => {
    setModalCreate(!modalCreate);
    seModalId(id);
  };

  return (
    <div className="App">
      <HomeRoute
        pictureClick={pictureClick}
        isFav={isFav}
        isFavPhotoExist={isFavPhotoExist}
      />
      {modalCreate ? (
        <PhotoDetailsModal
          pictureClick={pictureClick}
          modalId={modalId}
          favImagesArr={favImagesArr}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default App;
