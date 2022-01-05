import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getSerieById } from "../redux/actions";
import "../styles/movie_details_page.sass";
import WorkScore from "./WorkScore";
import CastSlider from "./CastSlider";
import SeasonItem from "./SeasonItem";
import { Link } from "react-router-dom";
import work_bg from "../assets/images/work-bg.jpg";
import ReviewItem from "./ReviewItem";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getSerieById })(
  function SerieDetails({ serie, getSerieById }) {
    const location = useLocation();
    let serieID;

    useEffect(() => {
      serieID = location.pathname.split("/")[2];
      getSerieById(serieID);
    }, [location]);

    const renderSeasons = () => {
      return serie?.seasons?.map((season) => {
        return (
          <SeasonItem key={season.name} season={season} serieID={serie?.id} />
        );
      });
    };
    if (serie) {
      if (serie.name) {
        document.title = `NETFLIX | ${serie?.name}`;
      }
      return (
        <div className="movie-details-page">
          <div className="movie-page-hero">
            <div className="movie-backdrop">
              <img
                className="movie-backdrop-img"
                src={
                  serie.backdrop_path
                    ? `https://www.themoviedb.org/t/p/w1920_and_h1080_multi_faces${serie?.backdrop_path}`
                    : work_bg
                }
                alt="backdrop-img"
              />
            </div>
            <div className="fluid-overlay"></div>
            <div className="movie-hero-content">
              <div className="container py-5">
                <div className="row align-items-center">
                  <div className="offset-1 col-3">
                    <div className="movie-poster">
                      <img
                        src={
                          serie?.poster_path
                            ? `https://www.themoviedb.org/t/p/w440_and_h660_face${serie?.poster_path}`
                            : `https://via.placeholder.com/440X660/FF2530/fff.png?text=NOT_AVAILABLE`
                        }
                        alt="movie-poster"
                        className="movie-poster-img"
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="movie-information">
                      <h1 className="movie-title">
                        {serie.name}{" "}
                        <span
                          className="movie-release-date
                        "
                        >
                          {`(${serie.first_air_date?.split("-")[0]})`}
                        </span>
                      </h1>
                      <div className="work-info d-flex">
                        <span className="work-info-tag">
                          {serie.first_air_date}
                        </span>
                        <span className="work-info-tag age-class">{`${
                          serie.number_of_seasons
                        } ${
                          serie.number_of_seasons === 1 ? "season" : "seasons"
                        }`}</span>
                        {serie.genres?.map((el) => {
                          return (
                            <span key={el.id} className="work-info-tag">
                              {el.name}
                            </span>
                          );
                        })}
                      </div>
                      <div className="user-actions py-4">
                        <WorkScore score={serie?.vote_average * 10} />
                      </div>
                      <span className="tagline">{serie.tagline}</span>
                      <div className="work-description  py-3">
                        {serie.overview}
                      </div>
                      <div className="work-actions-btns">
                        <Link
                          to={`/watch/serie/${serie?.id}/season/1/epsoide/1`}
                          className="btn me-3"
                        >
                          <i className="fal fa-play me-3"></i>
                          play
                        </Link>
                        {serie?.homepage ? (
                          <a
                            href={serie?.homepage}
                            target="_blank"
                            className="btn me-3 info-link-btn"
                          >
                            Visit Website
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="work-details-area pt-5">
            <div className="container mb-5">
              <div className="row">
                <div className="col-9">
                  <div className="work-main-data">
                    <div className="movie-trailer">
                      <h5 className="mb-4">Movie Trailer</h5>
                      <div className="trailer-area mb-5">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${serie?.videos?.results[0]?.key}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <CastSlider
                      cast={serie?.credits?.cast?.filter((el) => {
                        return el.profile_path;
                      })}
                    />
                  </div>
                </div>
                <div className="col-3 py-5">
                  <div className="work-facts">
                    <div className="work-social-links mb-4 d-flex">
                      <a
                        title="Visit IMDB"
                        className="me-5"
                        target="_blank"
                        href={`https://www.imdb.com/title/${serie?.external_ids?.imdb_id}`}
                      >
                        <i className="fab fa-imdb"></i>
                      </a>
                      {serie?.external_ids?.facebook_id ? (
                        <a
                          title="Visit Facebook"
                          className="me-5"
                          href={`http://facebook.com/${serie?.external_ids?.facebook_id}`}
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square"></i>
                        </a>
                      ) : null}
                      {serie?.external_ids?.twitter_id ? (
                        <a
                          title="Visit Twitter"
                          className="me-5"
                          href={`http://twitter.com/${serie?.external_ids?.twitter_id}`}
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      ) : null}
                      {serie?.external_ids?.instagram_id ? (
                        <a
                          title="Visit Instagram"
                          className="me-5"
                          href={`http://instagram.com/${serie?.external_ids?.instagram_id}`}
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      ) : null}
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Status</p>
                      <p className="value">{serie.status || "N/A"}</p>
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Original Language</p>
                      <p className="value">{serie.original_language}</p>
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Type</p>
                      <p className="value">{serie.type}</p>
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Budget</p>
                      <p className="value">
                        {!serie.budget ? "N/A" : `$ ${serie.budget}`}
                      </p>
                    </div>
                    <div className="work-info-item py-2">
                      <p className="title">Revenue</p>
                      <p className="value">
                        {!serie.revenue ? "N/A" : `$ ${serie.revenue}`}
                      </p>
                    </div>
                    {(() => {
                      if (serie?.keywords?.results?.length) {
                        return (
                          <div className="work-info-item py-4">
                            <p className="title">Keywords</p>
                            <ul className="works-keywords">
                              {serie?.keywords?.results.map((el) => {
                                return (
                                  <li
                                    key={el.id}
                                    className="badge bg-secondary"
                                  >
                                    {el.name}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })()}
                    {(() => {
                      if (serie?.networks?.length) {
                        return (
                          <div className="work-info-item py-4">
                            <p className="title">Networks</p>
                            <ul className="works-keywords">
                              {serie?.networks?.map((el) => {
                                return (
                                  <li className="my-2 me-4" key={el.id}>
                                    <img
                                      className="network-img"
                                      src={`https://www.themoviedb.org/t/p/h30/${el.logo_path}`}
                                      alt={el.name}
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })()}
                    {(() => {
                      if (serie?.languages?.length) {
                        return (
                          <div className="work-info-item">
                            <p className="title">Languages</p>
                            <ul className="works-keywords">
                              {serie?.languages?.map((el) => {
                                return (
                                  <li
                                    key={el}
                                    className="badge uppercase bg-danger"
                                  >
                                    {el}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      }
                    })()}
                  </div>
                </div>
              </div>
            </div>
            <div className="serie-seasons-area py-5">
              <div className="container">
                <div className="row">
                  <div className="col-8">
                    <h5 className="mb-4">Tv Show Seasons</h5>
                    <div className="container p-0">
                      <div className="row">{renderSeasons()}</div>
                    </div>
                  </div>
                  <div className="col-4">
                    {(() => {
                      return (
                        <div className="work-info-item ">
                          <p className="title mb-4">{`Reviews (${
                            serie?.reviews?.results?.length || 0
                          })`}</p>
                          <ul className="works-keywords tv-show-reviews-container">
                            {serie?.reviews?.results.length ? (
                              serie.reviews.results.map((rev) => {
                                return (
                                  <ReviewItem
                                    avatarCol={2}
                                    body={10}
                                    key={rev.id}
                                    review={rev}
                                    invert={true}
                                  >
                                    {rev.content}
                                  </ReviewItem>
                                );
                              })
                            ) : (
                              <li className="my-2 pe-1">
                                We don't have any reviews for {serie.name}.
                              </li>
                            )}
                          </ul>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <>404</>;
  }
);
