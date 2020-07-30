import * as React from "react";
import {AppRoute} from "../../utils/consts";
import {AuthorizationStatus} from "../../types";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Redirect, Route} from "react-router-dom";

interface Props {
  authorizationStatus: AuthorizationStatus,
  exact: boolean,
  path: string,
  render: ({number}) => React.ReactNode;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
