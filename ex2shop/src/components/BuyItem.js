import React from "react";
import "BuyItem.css";

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
        <button className="add">Add</button>
      </td>
      <td>
        <button className="remove">Remove</button>
      </td>
    </tr>
  );
};

export default BuyItem;
