import {FilmDetailsTab} from "../../utils/consts.js";
import PropTypes from "prop-types";
import React from "react";

const Tabs = (props) => {
  const {tab: activeTab, children, onTabClick} = props;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(FilmDetailsTab).map((tabName, index) => (
            <li className={`movie-nav__item ${activeTab === tabName && `movie-nav__item--active`}`} key={tabName + index}>
              <a href="#" className="movie-nav__link" onClick={() => onTabClick(tabName)}>{tabName}</a>
            </li>
          ))}
        </ul>
      </nav>

      {children}
    </div>
  );
};

Tabs.propTypes = {
  tab: PropTypes.oneOf([FilmDetailsTab.OVERVIEW, FilmDetailsTab.DETAILS, FilmDetailsTab.REVIEWS]).isRequired,
  onTabClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tabs;
