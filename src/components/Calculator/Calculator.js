// @vendors
import React, { useState } from 'react';

// @constants
import { BUTTONS, BUTTON_TYPES } from './constants';

// @styles
import styles from './Calculator.css';

const Calculator = ({ onCalculation }) => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const calculate = (a, operator, b) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Error';
      default:
        return b;
    }
  };

  const handleButtonClick = (button) => {
    switch (button.type) {
      case BUTTON_TYPES.number:
        if (isNewNumber || display === '0') {
          setDisplay(button.value);
          setIsNewNumber(false);
        } else {
          setDisplay(display + button.value);
        }
        break;

      case BUTTON_TYPES.operator:
        setEquation(display + ' ' + button.value + ' ');
        setIsNewNumber(true);
        break;

      case BUTTON_TYPES.equal:
        if (!equation) return;
        const [num1, operator] = equation.split(' ');
        const result = calculate(num1, operator, display);
        const fullEquation = `${num1} ${operator} ${display}`;
        
        setDisplay(result.toString());
        setEquation('');
        setIsNewNumber(true);
        
        onCalculation({
          equation: fullEquation,
          result: result.toString()
        });
        break;

      case BUTTON_TYPES.clear:
        setDisplay('0');
        setEquation('');
        setIsNewNumber(true);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div className={styles.equation}>{equation}</div>
        <div className={styles.current}>{display}</div>
      </div>
      <div className={styles.buttons}>
        {BUTTONS.map((button, index) => (
          <button
            key={index}
            className={styles.button}
            data-type={button.type}
            onClick={() => handleButtonClick(button)}
          >
            {button.display || button.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator; 