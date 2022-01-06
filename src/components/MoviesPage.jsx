import React, { useEffect, useState } from "react";
import ResultsContainer from "./ResultsContainer";
import SideBarFilter from "./SideBarFilter";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopMovies,
  getUpcomingMovies,
} from "../redux/actions";

import "../styles/movies-page.sass";
import { connect } from "react-redux";
import PageHeroSlider from "./PageHeroSlider";

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {
  getPopularMovies,
  getNowPlayingMovies,
  getTopMovies,
  getUpcomingMovies,
})(function MoviesPage(props) {
  const location = useLocation();
  const [page, setpage] = useState(1);
  const [category, setCategory] = useState("popular");

  useEffect(() => {
    setCategory(
      location.pathname.split("/")[2]
        ? location.pathname.split("/")[2]
        : "popular"
    );
    setpage(location.search.split("=")[1] ? +location.search.split("=")[1] : 1);

    if (category === "popular") {
      props.getPopularMovies(page);
      document.title = "NETFLIX | Popular Movies";
    }
    if (category === "now_playing") {
      props.getNowPlayingMovies(page);
      document.title = "NETFLIX | Now Playing Movies";
    }
    if (category === "top_rated") {
      props.getTopMovies(page);
      document.title = "NETFLIX | Top Rated Movies";
    }
    if (category === "upcoming") {
      props.getUpcomingMovies(page);
      document.title = "NETFLIX | Upcoming Movies";
    }
  }, [location, category, page]);

  return (
    <>
      <div className="page-hero-slider">
        <PageHeroSlider results={props.movies.slice(0, 3)} />
      </div>
      <div className="page-main">
        <div className="container">
          <div className="row">
            <SideBarFilter
              label={`${category} movies`}
              list={props.movies}
            ></SideBarFilter>
            <ResultsContainer
              pathname="movies"
              categories={["popular", "now playing", "top rated", "upcoming"]}
              results={props.movies}
            >
              <Pagination page={page} />
            </ResultsContainer>
          </div>
        </div>
      </div>
    </>
  );
});
