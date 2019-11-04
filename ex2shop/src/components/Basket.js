import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../store/actions/index";
import styled from "styled-components";

import BuyItem from "./BuyItem";

// const ImgBar = styled.img`
//   width: 90vw;
//   alt: "img";
//   src: "../assets/bar.png";
// `;

const TrHead = styled.tr`
  width: 90vw;
  background-color: gray;
  border-radius: 1rem;
  font: 2rem Cursive;
  padding: 1rem;

  th {
    color: white;
    padding: 0.5rem;
    background-color: transparent;
  }
`;

const TrBottom = styled.tr`
  width: 90vw;
  background-color: #4b7891;
  border-radius: 1rem;
  font: 2rem Cursive;
  padding: 1rem;
  color: white;
  text-align: right;
`;

const Table = styled.table`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 98vw;
  border-radius: 1rem;
`;

const Div = styled.div`
  height: 40vh;
  padding: 1rem;
`;

class Basket extends React.Component {
  render() {
    return (
      this.props.basket && (
        <React.Fragment>
          <Table>
            <TrHead>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total price</th>
            </TrHead>
            <Div>
              {this.props.basket.map(item => (
                <BuyItem
                  key={item.id}
                  item={item}
                  addItem={() => addItem(item)}
                  removeItem={() => removeItem(item.id)}
                />
              ))}
            </Div>
            <TrBottom>{this.props.price}</TrBottom>
          </Table>
        </React.Fragment>
      )
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
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
)(Basket);
