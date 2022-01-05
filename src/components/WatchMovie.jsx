import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieById } from "../redux/actions";
import { useLocation } from "react-router-dom";
import MoviePageHero from "./MoviePageHero";
import "../styles/movie_details_page.sass";
import VideoPlayerArea from "./VideoPlayerArea";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getMovieById })(function WatchMovie({
  movie,
  getMovieById,
}) {
  const location = useLocation();
  let id;
  useEffect(() => {
    id = location.pathname.split("/")[3];
    getMovieById(id);
  }, [location]);

  if (movie) {
    if (movie.title) {
      document.title = `NETFLIX | Watch ${movie?.title}`;
    }
    return (
      <>
        <MoviePageHero btns={false} movie={movie} />
        <VideoPlayerArea id={movie.id} />
      </>
    );
  }
  return <></>;
});
