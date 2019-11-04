import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fibbonacciSequence: []
  };

  fibbonacci = () => {
    let arr = [1, 1];
    for (let i = 2; i < 10001; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  };

  componentDidMount() {
    let arr = this.fibbonacci();
    this.setState({ fibbonacciSequence: arr });
  }

  multipleFive = num => {
    if (num % 5 === 0) {
      return "multipleFive";
    }
    return "";
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fibbonacci sequence</h1>
          <ul className="fibNum">
            {this.state.fibbonacciSequence.map(num => (
              <li className={this.multipleFive(num)}>{num}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
