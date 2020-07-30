import * as React from "react";
import {FilmPageTab} from "../../types";

interface Props {
  children: React.ReactNode,
  id?: number,
  tab: FilmPageTab,
  onTabClick: (FilmPageTab) => void,
}

const Tabs: React.FunctionComponent<Props> = (props: Props) => {
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

export default Tabs;
