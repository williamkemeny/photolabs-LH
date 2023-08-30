import React from "react";
import HomeRoute from "./components/HomeRoute";
import PhotoDetailsModal from "./components/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    favImagesArr,
    isFavPhotoExist,
    modalCreate,
    modalId,
    isFav,
    pictureClick,
    photos,
    topicPhotos,
    topics,
    topicSelected,
    topicClick,
    searchBar,
    selectOption,
    handleChange,
    handleChange2,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        pictureClick={pictureClick}
        isFav={isFav}
        isFavPhotoExist={isFavPhotoExist}
        favImagesArr={favImagesArr}
        topicPhotos={topicPhotos}
        topicSelected={topicSelected}
        topics={topics}
        topicClick={topicClick}
        searchBar={searchBar}
        selectOption={selectOption}
        handleChange={handleChange}
        handleChange2={handleChange2}
      />
      {modalCreate ? (
        <PhotoDetailsModal
          photos={photos}
          pictureClick={pictureClick}
          modalId={modalId}
          favImagesArr={favImagesArr}
          isFav={isFav}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default App;
