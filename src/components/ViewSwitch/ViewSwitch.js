// @vendors
import React from 'react';

// @constants
import { VIEWS, VIEW_LABELS } from './constants';

// @styles
import styles from './ViewSwitch.css';

const ViewSwitch = ({ view, onSwitch }) => {
  return (
    <div className={styles.switch}>
      {Object.values(VIEWS).map((viewType) => (
        <button 
          key={viewType}
          className={`${styles.button} ${view === viewType ? styles.active : ''}`}
          onClick={() => onSwitch(viewType)}
        >
          {VIEW_LABELS[viewType]}
        </button>
      ))}
    </div>
  );
};

export default ViewSwitch; 