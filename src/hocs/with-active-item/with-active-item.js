import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: undefined,
      };

      this._handleActiveClick = this._handleActiveClick.bind(this);
    }

    _handleActiveClick(activeItemName) {
      this.setState(
          {
            activeItem: activeItemName,
          }
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActiveClick={this._handleActiveClick}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
