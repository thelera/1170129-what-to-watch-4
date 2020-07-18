import {FilmDetailsTab} from "../../utils/consts.js";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const Tabs = (props) => {
  const {children, id, tab: activeTab, onTabClick} = props;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(FilmDetailsTab).map((tabName, index) => (
            <li className={`movie-nav__item ${activeTab === tabName && `movie-nav__item--active`}`} key={tabName + index}>
              <Link
                to={id}
                className="movie-nav__link"
                onClick={() => {
                  onTabClick(tabName);
                }}
              >
                {tabName}
              </Link>
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
  id: PropTypes.number.isRequired,
  tab: PropTypes.oneOf([FilmDetailsTab.OVERVIEW, FilmDetailsTab.DETAILS, FilmDetailsTab.REVIEWS]).isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;
