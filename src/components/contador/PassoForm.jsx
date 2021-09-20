import React, { Component } from 'react';

class PassoForm extends Component {
  render() {
    return (
      <div>
        <label htmlFor="passoInput">Passo: </label>
        <input type="number" id="passoInput" value={this.props.passo} onChange={e => this.props.setPasso(+e.target.value)} />
      </div>
    );
  }
}

export default PassoForm;