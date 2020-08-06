import * as React from "react";

interface State {
  activeItem: string;
}

const withActiveItem = (Component) => {
  type T = React.ComponentProps<typeof Component>;

  class WithActiveItem extends React.PureComponent<T, State> {
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
