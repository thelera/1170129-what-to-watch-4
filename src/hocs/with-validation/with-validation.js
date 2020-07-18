import React, {PureComponent} from "react";

const withValidation = (Component) => {
  class WithValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        message: null,
      };

      this._handleValidForm = this._handleValidForm.bind(this);
    }

    _handleValidForm(validationMessage) {
      this.setState(
          {
            message: validationMessage,
          }
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          validationMessage={this.state.message}
          onValidForm={this._handleValidForm}
        />
      );
    }
  }

  return WithValidation;
};

export default withValidation;
