import * as React from "react";
import {Video} from "../../utils/consts";

interface State {
  isPlaying: boolean;
}

const withTimerOnHover = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  class WithTimerOnHover extends React.PureComponent<T, State> {
    timerId: NodeJS.Timer;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
      this.timerId = setTimeout(() => this.setState({isPlaying: true}), Video.INTERVAL_IN_SEC);
    }

    _handleMouseLeave() {
      clearTimeout(this.timerId);

      this.setState({
        isPlaying: false,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
        />
      );
    }

    componentWillUnmount() {
      clearTimeout(this.timerId);
    }
  }

  return WithTimerOnHover;
};

export default withTimerOnHover;
