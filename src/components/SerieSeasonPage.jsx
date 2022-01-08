import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getSerieById, getSerieEpisodes } from "../redux/actions";
import SeasonPageHero from "./SeasonPageHero";
import EpisodeItem from "./EpisodeItem";
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
    const [season, setSeason] = useState(null);
    useEffect(() => {
      getSerieById(id);
    }, [id, number]);

    useEffect(() => {
      if (serie && !season) {
        setSeason(
          serie?.seasons.filter((season) => {
            return season?.season_number == number;
          })[0]
        );
        document.title = `NETFLIX | ${serie?.name} - Season ${number}`;
      }
    }, [serie]);

    useEffect(() => {
      if (season) {
        for (let ep = 1; ep <= season.episode_count; ep++) {
          getSerieEpisodes(id, number, ep);
        }
      }
    }, [season]);
    if (season && serie) {
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
                    <div className="col-4">
                      <EpisodeItem
                        key={ep.id}
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
    } else return <></>;
  }
);
