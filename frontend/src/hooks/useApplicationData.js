import { useEffect, useCallback, useReducer } from "react";
import removeArrWithId from "../helper/removeArrWithId";

const ACTIONS = {
  ADD_ID: "add_id",
  REMOVE_ID: "remove_id",
  FAVOURITE_TRUE: "favourite_true",
  FAVOURITE_FALSE: "favourite_false",
  MODAL: "modal",
  MODAL_ID: "modal_ID",
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
      return { ...state, modalCreate: !state.modalCreate };
    case ACTIONS.MODAL_ID:
      return { ...state, modalId: action.id };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const initialState = {
    favImagesArr: [],
    isFavPhotoExist: false,
    modalCreate: false,
    modalId: 1,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const isFav = useCallback((on, id) => {
    on === true && !state.favImagesArr.includes(id)
      ? dispatch({ type: "add_id", id })
      : dispatch({ type: "remove_id", id });
  });

  const pictureClick = (id) => {
    dispatch({ type: "modal" });
    dispatch({ type: "modal_ID", id });
  };

  useEffect(() => {
    if (state.favImagesArr.length > 0) {
      dispatch({ type: "favourite_true" });
    } else {
      dispatch({ type: "favourite_false" });
    }
  }, [state.favImagesArr > 0, state.favImagesArr.length === 0]);

  return {
    favImagesArr: state.favImagesArr,
    isFavPhotoExist: state.isFavPhotoExist,
    modalCreate: state.modalCreate,
    modalId: state.modalId,
    isFav,
    pictureClick,
  };
};

export default useApplicationData;
