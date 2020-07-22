import {FilmPageTab} from "../../utils/consts.js";
import PropTypes from "prop-types";
import React from "react";

const Tabs = (props) => {
  const {children, tab: activeTab, onTabClick} = props;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(FilmPageTab).map((tabName, index) => (
            <li className={`movie-nav__item ${activeTab === tabName && `movie-nav__item--active`}`} key={tabName + index}>
              <a
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();

                  onTabClick(tabName);
                }}
              >
                {tabName}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {children}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  tab: PropTypes.oneOf([FilmPageTab.OVERVIEW, FilmPageTab.DETAILS, FilmPageTab.REVIEWS]).isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
