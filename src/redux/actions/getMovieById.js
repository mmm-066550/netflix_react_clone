import tmdb from "../../apis/tmdb";

const getMovieById = (id) => {
  return async function (dispatch) {
    const res = await tmdb.get(`/movie/${id}`, {
      params: {
        append_to_response:
          "videos,images,credits,reviews,keywords,release_dates,external_ids",
      },
    });

    dispatch({
      type: "GET_MOVIE",
      payload: res.data,
    });
  };
};
export default getMovieById;
