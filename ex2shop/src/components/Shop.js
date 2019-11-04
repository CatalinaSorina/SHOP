import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../store/actions/index";

import Item from "./Item";

class Shop extends React.Component {
  render() {
    return (
      this.props.shop.length > 0 && (
        <React.Fragment>
          {this.props.shop.map(item => (
            <Item
              key={item.id}
              item={item}
              addItem={addItem(item)}
              removeItem={removeItem(item.id)}
            />
          ))}
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    shop: state.shop
  };
};

const mapDispatchToProps = {
  addItem,
  removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
