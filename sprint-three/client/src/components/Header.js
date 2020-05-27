// IMPORTED REACT TO COMPONENT //
import React from "react";
import { NavLink, Link } from "react-router-dom";

// IMPORTED ICONS //
import logo from "../assets/Logo/Logo-brainflix.svg";
import upload from "../assets/Icons/SVG/Icon-upload.svg";
// HEADER FUNCTION //
function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-header__navlink">
        <img src={logo} alt="BrainFlix Logo" />
      </NavLink>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <form>
              <input
                type="text"
                className="nav__item--search-box"
                placeholder="Search"
                name="search"
              />
            </form>
          </li>
          <li className="nav__item">
            <Link to="/upload">
              <button type="submit" className="nav__item--btn">
                <img
                  src={upload}
                  alt="Upload Plus Icon"
                  className="nav__item--icon"
                />
                UPLOAD
              </button>
            </Link>
          </li>
          <li className="nav__item">
            <div className="nav__item--profile-circle"></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
