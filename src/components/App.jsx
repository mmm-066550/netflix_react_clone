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

export default (function App() {
  return (
    <BrowserRouter>
      <GridTest />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route exact path="movies" element={<MoviesPage />} />
        <Route exact path="series" element={<TvShowsPage />} />
        <Route exact path="movies/:category" element={<MoviesPage />} />
        <Route exact path="series/:category" element={<TvShowsPage />} />
        <Route exact path="movie/:id" element={<MovieDetails />} />
        <Route exact path="serie/:id" element={<SerieDetails />} />
        <Route exact path="watch/movie/:id" element={<WatchMovie />} />
      </Routes>
    </BrowserRouter>
  );
});
