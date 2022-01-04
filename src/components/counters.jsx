import React, { Component } from "react";
import Counter from "./counter";
import Navbar from "./navbar";

//2 change counters from class to function
class Counters extends React.Component {
  state = {
    counterArr: [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 },
    ],
  };

  handleReset = () => {
    console.log("handle reset");
    const counterArr = this.state.counterArr.map((c) => {
      c.value = 0;
      return c;
    });
    console.log(counterArr);
    this.setState({ counterArr });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counterArr];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counterArr: counters });
    console.log("Increment", counter.value);
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counterArr];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counterArr: counters });
    console.log("Decrement", counter.value);
  };

  handleResetCounter = (counter) => {
    const counters = [...this.state.counterArr];
    const index = counters.indexOf(counter);
    counters[index].value = 0;
    this.setState({ counterArr: counters });
    console.log("Increment", counter.value);
  };

  handleDelete = (counter) => {
    const counters = this.state.counterArr.filter((c) => c.id !== counter.id);
    this.setState({ counterArr: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar count={this.state.counterArr.length} />
        <button
          onClick={this.handleReset}
          className="btn btn-danger btn-lg m-2"
        >
          Reset
        </button>
        {console.log(this.state.counterArr)}
        {this.state.counterArr.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleResetCounter}
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
