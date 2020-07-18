import React, {PureComponent} from "react";

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        id: 0,
      };

      this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(number) {
      this.setState(
          {
            id: number,
          }
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          id={this.state.id}
          onChange={this._handleChange}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
