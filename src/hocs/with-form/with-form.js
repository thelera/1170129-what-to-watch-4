import React, {PureComponent} from "react";

const withForm = (Component) => {
  class WithForm extends PureComponent {
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

  return WithForm;
};

export default withForm;
