import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Video} from "../../utils/consts.js";

const withFilmCard = (Component) => {
  class withFilmCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._handleClick = this._handleClick.bind(this);
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
      const {film, onHover} = this.props;

      this.timerId = setTimeout(() => this.setState({isPlaying: true}), Video.INTERVAL_IN_SEC);

      onHover(film.id)
    }

    _handleMouseLeave() {
      clearTimeout(this.timerId);

      this.setState({
        isPlaying: false,
      });
    }

    _handleClick() {
      const {film, onClick} = this.props;
      
      onClick(film.id);
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onClick={this._handleClick}
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
    film: PropTypes.shape({
      backgroundImage: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      director: PropTypes.arrayOf(PropTypes.string).isRequired,
      genres: PropTypes.arrayOf(PropTypes.string).isRequired,
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      ratingCount: PropTypes.number.isRequired,
      ratingLevel: PropTypes.string.isRequired,
      ratingScore: PropTypes.number.isRequired,
      runTime: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    }),
    onClick: PropTypes.func.isRequired,
    onHover: PropTypes.func.isRequired,
  };

  const mapStateToProps = () => ({});

  const mapDispatchToProps = (dispatch) => ({
    onClick(id) {
      dispatch(ActionCreator.filmIdAction(id));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(withFilmCard);
};

export default withFilmCard;
