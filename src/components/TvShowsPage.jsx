import React, { useEffect, useState } from "react";
import ResultsContainer from "./ResultsContainer";
import SideBarFilter from "./SideBarFilter";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";
import scrollToTop from "../helpers/scrollToTop";
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
  const [category, setCategory] = useState("");

  useEffect(() => {
    setCategory(location.pathname.split("/")[2]);
    setpage(location.search.split("=")[1] ? +location.search.split("=")[1] : 1);
    scrollToTop();
    return () => {
      scrollToTop();
    };
  }, [location]);

  useEffect(() => {
    switch (category) {
      case undefined:
        document.title = "NETFLIX | Popular Series";
        props.getPopularTv(page);
        break;
      case "airing_today":
        document.title = "NETFLIX | Airing Today Series";
        props.getNowPlayingTv(page);
        break;
      case "on_tv":
        document.title = "NETFLIX | On Tv Series";
        props.getOnTheAirTv(page);
        break;
      case "top_rated":
        document.title = "NETFLIX | Top Rated Series";
        props.getTopTv(page);
        break;
      default:
        document.title = "NETFLIX | 404 NOT FOUND";
        break;
    }
  }, [category, page]);
  return (
    <>
      <div className="page-hero-slider">
        <PageHeroSlider results={props.series.slice(0, 3)} />
      </div>
      <div className="page-main">
        <div className="container">
          <div className="row">
            <SideBarFilter
              label={`${category || "Popular"} series`}
              list={props.series}
            ></SideBarFilter>
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
