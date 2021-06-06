import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Calculate() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [state, updateState] = useState(0);


  function add() {
    updateState(Number(number1) + Number(number2));
  }

  function subtract() {
    updateState(number1 - number2);
      
  }

  function multiply() {
      updateState(number1 * number2)
  }

 function divide() {
    updateState(number1 / number2)

 }
  return (
      
    <>
      <h1>React-Calculator</h1>

      <div>
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(e.target.value)}
          placeholder="0"
        />
      </div>

      <div className="content">
      <Button size="lg" className="content" onClick={add}>+</Button>
      <Button size="lg" className="content" onClick={subtract}>-</Button>
      <Button size="lg" className="content"onClick={multiply}>*</Button>
      <Button size="lg" className="content"onClick={divide}>/</Button>
      </div>

      <div className="total">
      <h1>{state}</h1>
      </div>

</>

  );
}

export default Calculate