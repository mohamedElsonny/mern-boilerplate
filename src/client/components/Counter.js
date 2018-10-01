import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  handleIncrement = () =>
    this.setState(({ count }) => ({
      count: count + 1
    }))
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default Counter
