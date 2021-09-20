import React, { Component } from 'react';

class Display extends Component {
  render() {
    return(
      <h3>{this.props.numero}</h3>
    );
  }
}

export default Display;