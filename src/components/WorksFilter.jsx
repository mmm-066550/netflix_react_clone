import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  sortRateDescending,
  sortRateAscending,
  sortDateDescending,
  sortDateAscending,
  sortTitleA_Z,
  sortTitleZ_A,
  filterByLanguage,
  initFilteredList,
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
  filterByLanguage,
  initFilteredList,
})(function WorksFilter({
  list,
  filteredList,
  label,
  sortRateDescending,
  sortRateAscending,
  sortTitleA_Z,
  sortTitleZ_A,
  sortDateDescending,
  sortDateAscending,
  filterByLanguage,
  initFilteredList,
}) {
  const [currentSort, setcurrentSort] = useState("None");
  const [currentFilter, setcurrentFilter] = useState("None");
  useEffect(() => {
    initFilteredList(list);
  }, [list]);
  const renderLanguages = () => {
    let Arr = [];
    const languages = [...new Set(list.map((el) => el.original_language))];
    languages.map((lang) => {
      const count = list.filter((el) => {
        return el.original_language === lang;
      }).length;
      Arr.push({ language: lang.toUpperCase(), count });
    });
    return Arr;
  };
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
                        sortRateDescending(filteredList);
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
                        sortRateAscending(filteredList);
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
                        sortDateDescending(filteredList);
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
                        sortDateAscending(filteredList);
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
                        sortTitleA_Z(filteredList);
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
                        sortTitleZ_A(filteredList);
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
                  {currentFilter}
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
                        setcurrentFilter("All");
                        filterByLanguage();
                        initFilteredList(list);
                      }}
                    >
                      All
                    </button>
                  </li>
                  {[...renderLanguages()].map((el) => {
                    return (
                      <li key={el.language}>
                        <button
                          className="dropdown-item"
                          onClick={() => {
                            setcurrentFilter(el.language);
                            filterByLanguage(list, el.language);
                          }}
                        >
                          {el.language}
                          <span>({el.count})</span>
                        </button>
                      </li>
                    );
                  })}
                  {/* {filterByLanguage()} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
