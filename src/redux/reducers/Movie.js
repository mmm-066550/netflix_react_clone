const Movie = (movie = {}, action) => {
  if (action.type === "GET_MOVIE") {
    return { ...action.payload };
  }
  return {};
};
export default Movie;
