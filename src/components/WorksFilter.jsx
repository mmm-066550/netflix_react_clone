import React, { useState } from "react";
import { connect } from "react-redux";
import {
  sortRateDescending,
  sortRateAscending,
  sortDateDescending,
  sortDateAscending,
  sortTitleA_Z,
  sortTitleZ_A,
} from "../redux/actions";
const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};
export default connect(mapStateToProps, {
  sortRateDescending,
  sortRateAscending,
  sortTitleA_Z,
  sortTitleZ_A,
  sortDateDescending,
  sortDateAscending,
})(function WorksFilter({
  list,
  label,
  sortRateDescending,
  sortRateAscending,
  sortTitleA_Z,
  sortTitleZ_A,
  sortDateDescending,
  sortDateAscending,
}) {
  const [currentSort, setcurrentSort] = useState("None");
  return (
    <div className="works-filter">
      <label>{label}</label>
      <div className="sort-filter">
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-button">Sort</div>
            <div className="accordion-body">
              <p>Sort Results By</p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentSort}
                  <i className="far fa-chevron-down"></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Rating Descending");
                        sortRateDescending(list);
                      }}
                    >
                      Rating Descending
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Rating Ascending");

                        sortRateAscending(list);
                      }}
                    >
                      Rating Ascending
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Release Date Descending");
                        sortDateDescending(list);
                      }}
                    >
                      Release Date Descending
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Release Date Ascending");
                        sortDateAscending(list);
                      }}
                    >
                      Release Date Ascending
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Title (A-Z)");
                        sortTitleA_Z(list);
                      }}
                    >
                      Title (A-Z)
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setcurrentSort("Title (Z-A)");
                        sortTitleZ_A(list);
                      }}
                    >
                      Title (Z-A)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sort-filter">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <div className="accordion-button">Filters</div>
            <div className="accordion-body">
              <p>Language</p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                  <i className="far fa-chevron-down"></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <button className="dropdown-item">Action</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Another action</button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
