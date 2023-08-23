import React, { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalCreate, setModalCreate] = useState(false);
  const pictureClick = () => {
    setModalCreate(!modalCreate);
  };

  return (
    <div className="App">
      <HomeRoute pictureClick={pictureClick} />
      {modalCreate ? (
        <PhotoDetailsModal pictureClick={pictureClick} />
      ) : (
        <div />
      )}
    </div>
  );
};

export default App;
