import React, { useLayoutEffect, useRef, useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { Game } from './components/Game';
import { GameSelector } from './components/GameSelector';
import styles from './App.module.scss';

function App() {
  const [department, setDepartment] = useState(null);
  const [sizeCoefficient, setSizeCoefficient] = useState(1);

  const appRef = useRef();

  function handleCalculateSizeCoefficient() {
    setSizeCoefficient((window.innerWidth || 1920) / 1920);
  }

  useLayoutEffect(() => {
    handleCalculateSizeCoefficient();
  }, []);

  useResizeObserver({ onResize: handleCalculateSizeCoefficient, ref: appRef });

  return (
    <div ref={appRef} className={styles.wrapper} style={{ '--sizeCoefficient': sizeCoefficient }}>
      {department ? <Game department={department} /> : <GameSelector onSelectDepartment={setDepartment} />}
    </div>
  );
}

export default App;
