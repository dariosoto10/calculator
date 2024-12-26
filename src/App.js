// @vendors
import React, { useState } from 'react';

// @components
import Calculator from './components/Calculator';
import History from './components/History';
import ViewSwitch from './components/ViewSwitch';

// @constants
import { VIEWS } from './components/ViewSwitch/constants';

// @styles
import styles from './index.css';

const App = () => {
  const [currentView, setCurrentView] = useState(VIEWS.CALCULATOR);
  const [calculations, setCalculations] = useState([]);

  const handleCalculation = (calculation) => {
    setCalculations(prev => [...prev, calculation]);
  };

  return (
    <div className={styles.container}>
      <h1>ON24 - Calculator</h1>
      <ViewSwitch 
        view={currentView} 
        onSwitch={setCurrentView}
      />
      {currentView === VIEWS.CALCULATOR ? (
        <Calculator onCalculation={handleCalculation} />
      ) : (
        <History calculations={calculations} />
      )}
    </div>
  );
};

export default App; 