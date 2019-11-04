import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../store/actions/index";

import BuyItem from "./BuyItem";

class Basket extends React.Component {
  render() {
    return (
      this.props.basket && (
        <React.Fragment>
          <table>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total price</th>
            </tr>
            {this.props.basket.map(item => (
              <BuyItem key={item.id} item={item} />
            ))}
          </table>
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    basket: state.basket
  };
};

const mapDispatchToProps = {
  addItem,
  removeItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
