import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../styles/movies-page.sass";
import MovieSerieView from "./MovieSerieView";
import WorksClassificationBtns from "./WorksClassificationBtns";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(function ResultsContainer(props) {
  console.log(props.filteredList);
  useEffect(() => {
    document.title = "Netflix | Popular Movies";
  }, []);

  const renderList = () => {
    if (props.filteredList.length) {
      return props.filteredList.map((el) => {
        return (
          <div className="result-view col-2_5" key={el.id}>
            <MovieSerieView work={el} />
          </div>
        );
      });
    }
    return props.results.map((el) => {
      return (
        <div className="result-view col-2_5" key={el.id}>
          <MovieSerieView work={el} />
        </div>
      );
    });
  };
  return (
    <div className="col-9 results-container">
      <div className="container">
        <div className="row">
          <WorksClassificationBtns
            btns={props.categories}
            pathname={props.pathname}
          />
        </div>
        <div className="row">{renderList()}</div>
        <div className="row">{props.children}</div>
      </div>
    </div>
  );
});
