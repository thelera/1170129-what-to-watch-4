import * as React from "react";
import {AppRoute} from "../../utils/consts";
import {AuthorizationStatus} from "../../reducer/user/user";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = (props) => {
  const {authorizationStatus, exact, path, render} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(properties) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(properties)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
