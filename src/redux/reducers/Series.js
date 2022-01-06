const Series = (series = [], action) => {
  if (action.type === "GET_POPULAR_TMDB_SERIES") {
    return [...action.payload];
  }
  if (action.type === "GET_NOW_PLAYING_TMDB_TV") {
    return [...action.payload];
  }
  if (action.type === "GET_TOP_TMDB_TV") {
    return [...action.payload];
  }
  if (action.type === "GET_ON_AIR_TMDB_TV") {
    return [...action.payload];
  }
  if (action.type === "SORT_RATE_DES") {
    return [...action.payload];
  }
  if (action.type === "SORT_RATE_AS") {
    return [...action.payload];
  }
  if (action.type === "SORT_DATE_DES") {
    return [...action.payload];
  }
  if (action.type === "SORT_DATE_AS") {
    return [...action.payload];
  }
  if (action.type === "SORT_TITLE_A_Z") {
    return [...action.payload];
  }
  if (action.type === "SORT_TITLE_Z_A") {
    return [...action.payload];
  }
  return series;
};
export default Series;
