import React, { useEffect, useState } from "react";
import ResultsContainer from "./ResultsContainer";
import SideBarFilter from "./SideBarFilter";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import {
  getPopularTv,
  getTopTv,
  getNowPlayingTv,
  getOnTheAirTv,
} from "../redux/actions";

import "../styles/movies-page.sass";
import { connect } from "react-redux";
import PageHeroSlider from "./PageHeroSlider";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getPopularTv,
  getTopTv,
  getNowPlayingTv,
  getOnTheAirTv,
})(function TvShowsPage(props) {
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
      document.title = "NETFLIX | Popular Tv Shows";
      props.getPopularTv(page);
    }
    if (category === "airing_today") {
      document.title = "NETFLIX | Airing Today Shows";
      props.getNowPlayingTv(page);
    }
    if (category === "on_tv") {
      document.title = "NETFLIX | On Tv Shows";
      props.getOnTheAirTv(page);
    }
    if (category === "top_rated") {
      document.title = "NETFLIX | Top Rated Shows";
      props.getTopTv(page);
    }
  }, [location, category, page, props]);
  const results = props.series.slice(0, 3);
  return (
    <>
      <div className="page-hero-slider">
        <PageHeroSlider results={results} />
      </div>
      <div className="page-main">
        <div className="container">
          <div className="row">
            <SideBarFilter></SideBarFilter>
            <ResultsContainer
              pathname="series"
              categories={["popular", "airing today", "top rated", "on tv"]}
              results={props.series}
            >
              <Pagination page={page} />
            </ResultsContainer>
          </div>
        </div>
      </div>
    </>
  );
});
