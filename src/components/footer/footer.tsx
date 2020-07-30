import * as React from "react";
import {AppRoute} from "../../utils/consts";
import {Link} from "react-router-dom";

interface Props {
  isMain?: boolean,
}

const Footer: React.FunctionComponent<Props> = (props: Props) => {
  const {isMain = false} = props;

  return (
    <footer className="page-footer">
      <div className="logo">
        {
          !isMain ?
            <Link to={AppRoute.MAIN} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link> :
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
        }
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
