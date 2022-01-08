const Serie = (serie = null, action) => {
  if (action.type === "GET_SERIE") {
    return { ...action.payload };
  }
  return serie;
};
export default Serie;
