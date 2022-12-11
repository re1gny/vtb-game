import React, { useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';
import useResizeObserver from 'use-resize-observer';
import { Game } from './components/Game';
import { GameSelector } from './components/GameSelector';
import styles from './App.module.scss';

function App(props) {
  const { className } = props;
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
    <div ref={appRef} className={cn(styles.wrapper, className)} style={{ '--sizeCoefficient': sizeCoefficient }}>
      <GameSelector
        className={cn(styles.gameSelector, !!department && styles.hidden)}
        onSelectDepartment={setDepartment}
      />
      <Game className={cn(styles.game, !department && styles.hidden)} department={department} />
    </div>
  );
}

export default App;
