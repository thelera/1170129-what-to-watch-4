import * as React from "react";

interface State {
  message: string;
}

const withValidation = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  class WithValidation extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        message: ``,
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
