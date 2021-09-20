import React, { useState } from 'react';

import './Input.css';

const Input = (props) => {
  const [valor, setValor] = useState('Inicial');
  const [valueNumber, setValueNumber] = useState(10);

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  function onChangeNumber(e) {
    setValueNumber(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" value={valor} onChange={quandoMudar} />
        <input type="number" value={valueNumber} onChange={onChangeNumber} />
        <input type="text" value={undefined} />
      </div>
    </div>
  );
};

export default Input;