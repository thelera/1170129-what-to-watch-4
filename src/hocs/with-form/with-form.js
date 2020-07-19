import React, {PureComponent} from "react";

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isDisabled: false,
        score: 1,
        text: ``,
      };

      this._handleDisableForm = this._handleDisableForm.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
    }

    _isLengthAllowed(length) {
      return (length >= MIN_TEXT_LENGTH && length <= MAX_TEXT_LENGTH);
    }

    _handleDisableForm(value) {
      this.setState(
        {
          isDisabled: value,
        }
      );
    }

    _handleRatingChange(number) {
      this.setState(
          {
            score: number,
          }
      );
    }

    _handleTextChange(value) {
      this.setState(
        {
          text: value,
        }
      );
    }

    render() {
      const {isDisabled, isValid, score, text} = this.state;
      return (
        <Component
          {...this.props}
          isDisabled={isDisabled}
          isValid={isValid}
          score={score}
          text={text}
          onDisable={this._handleDisableForm}
          onRatingChange={this._handleRatingChange}
          onTextChange={this._handleTextChange}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
