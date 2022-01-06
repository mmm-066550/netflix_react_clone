import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { changeIsLoggedIn } from "../redux/actions";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.webp";
import "../styles/navbar.sass";

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { changeIsLoggedIn })(
  function MainNavbar(props) {
    const nav = useRef();
    const home = useRef();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(null);
    const [navFixed, setNavFixed] = useState(false);

    const setActiveClass = () => {
      [...nav.current.children].map((el) => {
        el.children[0].classList.remove("active");
        if (!currentPage) {
          home.current.classList.add("active");
        }
        if (currentPage && el.children[0].innerHTML === currentPage) {
          el.children[0].classList.add("active");
        }
      });
    };

    useEffect(() => {
      setCurrentPage(location.pathname.split("/")[1]);
      setActiveClass();
    });

    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setNavFixed(true);
      } else if (window.scrollY <= 120) {
        setNavFixed(false);
      }
    });
    return (
      <nav className={navFixed ? "invert nav-top-fixed" : null}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col navbar-left-area">
              <Link to="/" className="brand-link me-4">
                <img
                  width={120}
                  src={logo}
                  alt="netflix logo"
                  title="NETFLIX"
                />
              </Link>
              <ul className="navbar-short-links" ref={nav}>
                <li className="nav-item">
                  <Link to="/" className="nav-link" ref={home}>
                    home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/movies" className="nav-link">
                    movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/series" className="nav-link">
                    series
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/people" className="nav-link">
                    people
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/favourites" className="nav-link">
                    favourites
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col navbar-right-area">
              <Link to={"/search"} className="search-btn navbar-btn">
                <i className="fal fa-search"></i>
              </Link>
              <button className="notifications-btn navbar-btn ms-4">
                <i className="fal fa-bell"></i>
                <span className="active"></span>
              </button>
              {!props.isUserLoggedIn ? (
                <button
                  className="login_signup-link ms-4"
                  onClick={props.changeIsLoggedIn}
                >
                  login
                </button>
              ) : (
                <>
                  <Link className="ms-4 navbar-btn user-avatar" to="/">
                    <img className="avatar-img" src={avatar} alt={"avatar"} />
                  </Link>
                  <Link
                    to={"/logout"}
                    className="ms-4 navbar-btn"
                    onClick={props.changeIsLoggedIn}
                  >
                    <i className="fal fa-power-off"></i>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
);
