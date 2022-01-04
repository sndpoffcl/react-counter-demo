import React, { Component } from "react";

//1 change the counter component from class to function
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1 className="m-2">{this.props.counter.value}</h1>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onReset(this.props.counter)}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
