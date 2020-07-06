import React, {PureComponent} from "react";
import {Video} from "../../utils/consts.js";

const withFilmCard = (Component) => {
  class WithFilmCard extends PureComponent {
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

  withFilmCard.propTypes = {
  };

  return WithFilmCard;
};

export default withFilmCard;
