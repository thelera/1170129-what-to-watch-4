import PropTypes from "prop-types";
import React from "react";
import {FilmDetailsTab} from "../../utils/consts.js";

const Tabs = (props) => {
  const {tab: activeTab, onTabClick, children} = props;
  

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list" 
          onClick={(evt) => {
            const clickedTab = evt.target.textContent;
            onTabClick(clickedTab);
          }
        }>
          <li className={`movie-nav__item ${activeTab === FilmDetailsTab.OVERVIEW && "movie-nav__item--active"}`}>
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
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
