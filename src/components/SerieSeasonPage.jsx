import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getSerieById, getSerieEpisodes } from "../redux/actions";
import SeasonPageHero from "./SeasonPageHero";
import EpisodeItem from "./EpisodeItem";
import LoadWrapper from "./LoadWrapper";
import _404 from "./_404";
import scrollToTop from "../helpers/scrollToTop";

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { getSerieById, getSerieEpisodes })(
  function SerieSeasonPage({
    getSerieById,
    getSerieEpisodes,
    serie,
    episodes,
  }) {
    const { id, number } = useParams();
    const [ready, setrReady] = useState("loading");
    const [season, setSeason] = useState(null);

    useEffect(() => {
      document.title = `NETFLIX | Loading ...`;
      scrollToTop();
      return () => {
        scrollToTop();
      };
    }, []);

    useEffect(() => {
      getSerieById(id);
    }, [id, number]);

    useEffect(() => {
      if (serie.success === false) {
        document.title = `NETFLIX | 404 NOT FOUND`;
        setrReady("404");
      } else if (!serie.success && serie.name) {
        const SEASON = serie?.seasons.find((season) => {
          return season?.season_number == number;
        });
        if (SEASON) setSeason(SEASON);
      } else {
        setrReady("loading");
      }
    }, [serie]);

    useEffect(() => {
      if (season) {
        // console.log(season);

        setrReady("ready");
        document.title = `NETFLIX | ${serie.name} - season ${season?.season_number}`;
        for (let ep = 1; ep <= season.episode_count; ep++) {
          getSerieEpisodes(id, number, ep);
        }
      }
      if (season === undefined) {
        setrReady("404");
        document.title = `NETFLIX | 404 NOT FOUND`;
      }
    }, [season]);

    if (ready === "404") return <_404 />;
    if (ready === "loading") return <LoadWrapper></LoadWrapper>;
    if (ready === "ready") {
      return (
        <>
          <SeasonPageHero serie={serie} season={season} btns={false} />
          <div className="episodes-container bg-white text-dark">
            <div className="container py-5">
              <div className="row">
                <div className="col">
                  <h5 className="episodes-count">
                    Episodes <span> ( {season?.episode_count} )</span>
                  </h5>
                </div>
              </div>
              <div className="row">
                {episodes?.sort().map((ep) => {
                  return (
                    <div key={ep.id} className="col-12 col-md-6 col-lg-4">
                      <EpisodeItem
                        season={season?.season_number}
                        episode={ep}
                        id={id}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      );
    }
  }
);
