import React from "react";

import "./Item.css";

const Item = props => {
  return (
    <React.Fragment>
      <img alt="img" src={props.item.imageUrl} onClick={props.addItem} />
    </React.Fragment>
  );
};

export default Item;
