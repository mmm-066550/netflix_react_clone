import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/// COMPONENTS
import Navbar from "./Navbar";
import GridTest from "./GridTest";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
import TvShowsPage from "./TvShowsPage";
import MovieDetails from "./MovieDetails";
import SerieDetails from "./SerieDetails";
import WatchMovie from "./WatchMovie";
import SearchPage from "./SearchPage";

export default (function App() {
  return (
    <BrowserRouter>
      <GridTest />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="series" element={<TvShowsPage />} />
        <Route path="movies/:category" element={<MoviesPage />} />
        <Route path="series/:category" element={<TvShowsPage />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="serie/:id" element={<SerieDetails />} />
        <Route path="watch/movie/:id" element={<WatchMovie />} />
        <Route
          path="watch/serie/:id/season/:id/eposide/:id"
          element={<WatchMovie />}
        />
        <Route path="search" element={<SearchPage />} />
        <Route path="search/:category" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
});
