import tmdb from "../../apis/tmdb";

const getSerieEpisodes = (id, season, episode) => {
  return async function (dispatch) {
    const res = await tmdb.get(`/tv/${id}/season/${season}/episode/${episode}`);
    console.log(res);
    dispatch({
      type: "GET_TV_EPISODES",
      payload: res.data,
    });
  };
};
export default getSerieEpisodes;
