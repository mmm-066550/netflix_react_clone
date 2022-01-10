const Serie = (serie = {}, action) => {
  if (action.type === "GET_SERIE") {
    return { ...serie, ...action.payload };
  }
  if (action.type === "GET_TV_EPISODES") {
    return { ...serie, ...action.payload };
  }
  return {};
};
export default Serie;
