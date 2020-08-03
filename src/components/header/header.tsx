import * as React from "react";
import {AppRoute} from "../../utils/consts";
import {AuthorizationStatus} from "../../types";
import {connect} from "react-redux";
import {getAuthorizationStatus, getAvatarURL} from "../../reducer/user/selectors";
import {Link} from "react-router-dom";

interface Props {
  authorizationStatus: AuthorizationStatus;
  avatarImage: string;
  children: React.ReactNode;
  className: string;
  isMain: boolean;
  isLinkToMyList: boolean;
  isUserBlock: boolean;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {authorizationStatus, avatarImage, children, className, isMain = false, isLinkToMyList, isUserBlock = false} = props;

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        {
          isMain ?
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a> :
            <Link to={!isMain && AppRoute.MAIN} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
        }
      </div>

      {children}

      {
        isUserBlock ?
          <div className="user-block">
            <Link to={isLinkToMyList && AppRoute.MY_LIST} className="user-block__link">
              {authorizationStatus === AuthorizationStatus.NO_AUTH && `Sign In`}
              {authorizationStatus === AuthorizationStatus.AUTH &&
              <div className="user-block__avatar">
                <img src={avatarImage} alt="User avatar" width="63" height="63" />
              </div>}
            </Link>
          </div> :
          <div className="user-block">
            <div className="user-block__avatar">
              {avatarImage && <img src={avatarImage} alt="User avatar" width="63" height="63" />}
            </div>
          </div>
      }
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  avatarImage: getAvatarURL(state),
});

export {Header};
export default connect(mapStateToProps)(Header);
