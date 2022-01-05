const TMDB_Trendings = (results = [], action) => {
  if (action.type === "GET_TMDB_TRENDINGS") {
    results = [];
    return [...results, ...action.payload];
  }
  return [...results];
};
export default TMDB_Trendings;
