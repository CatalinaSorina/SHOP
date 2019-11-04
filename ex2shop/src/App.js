import React from "react";
import "./App.css";

import Shop from "./components/Shop";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <div className="basketHolder">
        <Shop />
      </div>
      <p>Your shopping Basket</p>
      <Basket />
    </div>
  );
}

export default App;
