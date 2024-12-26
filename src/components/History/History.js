// @vendors
import React from 'react';

// @styles
import styles from './History.css';

const History = ({ calculations }) => {
  return (
    <div className={styles.history}>
      <h2>Calculation History</h2>
      <div className={styles.list}>
        {calculations.map((calc, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.equation}>{calc.equation}</span>
            <span className={styles.result}>{calc.result}</span>
          </div>
        ))}
        {calculations.length === 0 && (
          <p className={styles.empty}>No calculations yet</p>
        )}
      </div>
    </div>
  );
};

export default History; 