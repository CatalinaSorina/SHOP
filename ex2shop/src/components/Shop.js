import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../store/actions/index";

import Item from "./Item";
import Basket from "./Basket";

class Shop extends React.Component {
  render() {
    return (
      this.props.shop.length > 0 && (
        <React.Fragment>
          {this.props.shop.map(item => (
            <Item
              key={item.id}
              item={item}
              addItem={() => this.props.addItem(item)}
              removeItem={() => this.props.removeItem(item.id)}
            />
          ))}
          <p>Your shopping Basket</p>
          <Basket
            basket={this.props.basket}
            price={this.props.price}
            addItem={this.props.addItem}
            removeItem={this.props.removeItem}
          />
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    shop: state.shop,
    basket: state.basket,
    price: state.price
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
