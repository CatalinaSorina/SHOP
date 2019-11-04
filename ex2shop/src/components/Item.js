import React from "react";

import "./Item.css";

const Item = props => {
  return (
    <React.Fragment>
      <button onClick={props.addItem}>
        <img alt="img" src={props.item.imageUrl} />
      </button>
    </React.Fragment>
  );
};

export default Item;
