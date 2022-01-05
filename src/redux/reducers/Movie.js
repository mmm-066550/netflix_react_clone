const Movie = (movie = null, action) => {
  if (action.type === "GET_MOVIE") {
    return { ...action.payload };
  }
  return null;
};
export default Movie;
