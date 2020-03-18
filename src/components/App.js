import React, {useState} from 'react';
import Die from './Die';

import '../styles/App.css';

function App() {
  const [result, setResult] = useState(1);

  const rollDie = () => {
    const rollResult = getRandomNumber(1, 6);
    setResult(rollResult);
  }

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="app">
      <button 
        className="roll-die-button" 
        onClick={rollDie}>
          Roll Die
      </button>
      <div className="roll-result">{`Result: ${result}`}</div>
      <Die rollResult={result} />
    </div>
  );
}

export default App;
