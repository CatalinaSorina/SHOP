import React from "react";
import styled from "styled-components";
import BackgroundAddImage from "../assets/button_add.png";
import BackgroundRemoveImage from "../assets/button_remove.png";

const ButonAdd = styled.button`
  background-image: url(${BackgroundAddImage});
`;
const ButonRemove = styled.button`
  background-image: url(${BackgroundRemoveImage});
`;

const BuyItem = props => {
  return (
    <tr>
      <td>
        <img alt="img" src={props.item.imageUrl} onClick={props.addItem} />
      </td>
      <td>{props.item.name}</td>
      <td>{props.item.price}</td>
      <td>{props.item.qty}</td>
      <td>
        <ButonAdd className="add">Add</ButonAdd>
      </td>
      <td>
        <ButonRemove className="remove">Remove</ButonRemove>
      </td>
    </tr>
  );
};

export default BuyItem;
