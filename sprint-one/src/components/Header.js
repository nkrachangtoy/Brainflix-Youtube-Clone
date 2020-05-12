import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        <a href="#" className="nav__logo">
          <img src="assets/Logo/Logo-brainflix.svg" alt="BrainFlix Logo" />
        </a>
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
            <button type="submit" className="nav__item--btn"></button>
          </li>
          <li className="nav__item">
            <div className="nav__item--circle-container">
              <img src="" alt="Profile Icon" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
