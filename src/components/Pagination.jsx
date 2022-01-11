import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/pagination.sass";
export default function Pagination({ page }) {
  // console.log(page);
  return (
    <div className="pagination-container">
      {(() => {
        if (+page - 1 !== 0) {
          return (
            <Link to={`?page=${+page - 1}`}>
              <i className="fa-2x fal fa-angle-double-left"></i>
              <span>page {+page - 1}</span>
            </Link>
          );
        }
      })()}
      {(() => {
        if (+page < 500) {
          return (
            <Link to={`?page=${+page + 1}`}>
              <span> page {+page + 1}</span>
              <i className="fa-2x fal fa-angle-double-right"></i>
            </Link>
          );
        }
      })()}
    </div>
  );
}
