const Serie = (serie = null, action) => {
  if (action.type === "GET_SERIE") {
    return { ...serie, ...action.payload };
  }
  return null;
};
export default Serie;
