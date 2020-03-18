import React, { useState, useEffect } from 'react';
import DieFace from './DieFace';

import '../styles/Die.css';

function Die({ rollResult }) {
  const [dieConfig, setDieConfig] = useState(null);

  useEffect(() => {
    setDieConfig(configureDie(rollResult));
  }, [rollResult]);

  const configureDie = rollResult => {
    const die = {
      top: null,
      left: null,
      right: null
    };

    switch (rollResult) {
      case 1:
        die.top = rollResult;
        die.left = 5;
        die.right = 4;
        break;
      case 2:
        die.top = rollResult;
        die.left = 1;
        die.right = 4;
        break;
      case 3:
        die.top = rollResult;
        die.left = 5;
        die.right = 1;
        break;
      case 4:
        die.top = rollResult;
        die.left = 1;
        die.right = 5;
        break;
      case 5:
        die.top = rollResult;
        die.left = 4;
        die.right = 1;
        break;
      case 6:
        die.top = rollResult;
        die.left = 4;
        die.right = 5;
        break;
      default:
        return;
    }
    return die;
  }

  return (
    <React.Fragment>
      {dieConfig &&
        <div className="die">
          <DieFace face="top" pipCount={dieConfig.top} />
          <DieFace face="left" pipCount={dieConfig.left} />
          <DieFace face="right" pipCount={dieConfig.right} />
        </div>
      }
    </React.Fragment> 
  );
}

export default Die;
