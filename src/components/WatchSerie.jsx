import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSerieById } from "../redux/actions";
import { useParams } from "react-router-dom";
import SeriePageHero from "./SeriePageHero";
import "../styles/movie_details_page.sass";
import VideoPlayerArea from "./VideoPlayerArea";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getSerieById })(function WatchSerie({
  serie,
  getSerieById,
}) {
  const { id, season, ep } = useParams();
  useEffect(() => {
    getSerieById(id);
    document.title = `NETFLIX | Watch ${serie?.name}`;
  }, []);

  return (
    <>
      <SeriePageHero btns={false} serie={serie} />
      <VideoPlayerArea id={id} season={season} ep={ep} />
    </>
  );
});
