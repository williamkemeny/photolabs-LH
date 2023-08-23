const removeArrWithId = (arr, id) => {
  const arrWithIdIndex = arr.findIndex((arr) => arr === id);
  if (arrWithIdIndex > -1) {
    arr.splice(arrWithIdIndex, 1);
  }
  return arr;
};

export default removeArrWithId;
