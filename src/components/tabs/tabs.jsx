import PropTypes from "prop-types";
import React from "react";
import {FilmDetailsTab} from "../../utils/consts.js";

const Tabs = (props) => {
  const {tab: activeTab, onTabClick, children} = props;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(FilmDetailsTab).map((tabName, index) => (
            <li className={`movie-nav__item ${activeTab === tabName && `movie-nav__item--active`}`} onClick={() => onTabClick(tabName)} key={tabName + index}>
              <a href="#" className="movie-nav__link">{tabName}</a>
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
