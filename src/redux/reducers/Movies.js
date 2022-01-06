const Movies = (movies = [], action) => {
  if (action.type === "GET_POPULAR_TMDB_MOVIES") {
    return [...action.payload];
  }
  if (action.type === "GET_TOP_TMDB_MOVIES") {
    return [...action.payload];
  }
  if (action.type === "GET_NOW_PLAYING_TMDB_MOVIES") {
    return [...action.payload];
  }
  if (action.type === "GET_UPCOMING_TMDB_MOVIES") {
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
  return movies;
};

export default Movies;
