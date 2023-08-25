import { useEffect, useCallback, useReducer } from "react";
import removeArrWithId from "../helper/removeArrWithId";

const ACTIONS = {
  ADD_ID: "add_id",
  REMOVE_ID: "remove_id",
  FAVOURITE_TRUE: "favourite_true",
  FAVOURITE_FALSE: "favourite_false",
  MODAL: "modal",
  MODAL_ID: "modal_ID",
  TOPIC_ID: "topic_id",
  SET_PHOTO_DATA: "set_photo_data",
  SET_TOPIC_DATA: "set_topic_data",
  PHOTOS_BY_TOPIC: "photos_by_topic",
  TOPIC_SELECTED: "topic_selected",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ID:
      return { ...state, favImagesArr: [...state.favImagesArr, action.id] };
    case ACTIONS.REMOVE_ID:
      return {
        ...state,
        favImagesArr: removeArrWithId(state.favImagesArr, action.id),
      };
    case ACTIONS.FAVOURITE_TRUE:
      return { ...state, isFavPhotoExist: true };
    case ACTIONS.FAVOURITE_FALSE:
      return { ...state, isFavPhotoExist: false };
    case ACTIONS.MODAL:
      console.log("modalCreate", action);
      return { ...state, modalCreate: !state.modalCreate };
    case ACTIONS.TOPIC_SELECTED:
      console.log("action", action);
      console.log("state", state);
      return { ...state, topicSelected: !state.topicSelected };
    case ACTIONS.MODAL_ID:
      console.log("modalId Action", action);
      return { ...state, modalId: action.id };
    case ACTIONS.TOPIC_ID:
      return { ...state, topicId: action.id };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.PHOTOS_BY_TOPIC:
      return { ...state, topicPhotos: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const initialState = {
    favImagesArr: [],
    isFavPhotoExist: false,
    modalCreate: false,
    topicSelected: false,
    modalId: 1,
    topicId: 1,
    photoData: [],
    topicData: [],
    topicPhotos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const isFav = useCallback((on, id) => {
    on === true && !state.favImagesArr.includes(id)
      ? dispatch({ type: "add_id", id })
      : dispatch({ type: "remove_id", id });
  });

  const pictureClick = useCallback((id) => {
    dispatch({ type: "modal" });
    dispatch({ type: "modal_ID", id });
  });

  const topicClick = (id) => {
    dispatch({ type: "topic_selected" });
    dispatch({ type: "topic_id", id });
  };

  useEffect(() => {
    if (state.favImagesArr.length > 0) {
      dispatch({ type: "favourite_true" });
    } else {
      dispatch({ type: "favourite_false" });
    }
  }, [state.favImagesArr > 0, state.favImagesArr.length === 0]);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "set_photo_data", payload: data }))
      .catch((err) => {
        console.log(err);
      });
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "set_topic_data", payload: data }))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics/photos/" + state.topicId)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "photos_by_topic", payload: data }))
      .catch((err) => {
        console.log(err);
      });
  }, [state.topicId, state.topicSelected]);

  return {
    favImagesArr: state.favImagesArr,
    isFavPhotoExist: state.isFavPhotoExist,
    modalCreate: state.modalCreate,
    modalId: state.modalId,
    isFav,
    pictureClick,
    topicClick,
    photos: state.photoData,
    topics: state.topicData,
    topicPhotos: state.topicPhotos,
    topicSelected: state.topicSelected,
  };
};

export default useApplicationData;
