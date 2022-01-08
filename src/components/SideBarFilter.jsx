import React from "react";
import WorksFilter from "./WorksFilter";
import "../styles/movies-page.sass";
import "../styles/works-filter.sass";

export default function SideBarFilter({ list, label }) {
  return (
    <div className="col-12 col-md-3 left-sidebar">
      <WorksFilter label={label} list={list} />
    </div>
  );
}
