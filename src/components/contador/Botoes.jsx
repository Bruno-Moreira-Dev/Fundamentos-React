import React, { Component } from 'react';

class Botoes extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

export default Botoes;