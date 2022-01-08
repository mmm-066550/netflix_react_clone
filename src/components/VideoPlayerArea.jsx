import React from "react";

export default function VideoPlayerArea({ season, ep, id }) {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-8">
            <iframe
              style={{ width: "100%", minHeight: "550px" }}
              src={
                season && ep
                  ? `https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season}&e=${ep}`
                  : `https://www.2embed.ru/embed/tmdb/movie?id=${id}`
              }
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
