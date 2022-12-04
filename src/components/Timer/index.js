import React, { useRef, useState } from 'react';
import styles from './index.module.scss';

export function Timer(props) {
  const { time } = props;
  const timerRef = useRef(null);
  const [isTicking, setIsTicking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);

  function handleTick(currentTimeLeft) {
    if (currentTimeLeft > 1) {
      const newTimeLeft = currentTimeLeft - 1;
      setTimeLeft(newTimeLeft);
      timerRef.current = setTimeout(() => handleTick(newTimeLeft), 1000);
    } else {
      handleFinish();
    }
  }

  function handleStart() {
    setIsTicking(true);
    timerRef.current = setTimeout(() => handleTick(timeLeft), 1000);
  }

  function handleFinish() {
    clearTimeout(timerRef.current);
    timerRef.current = null;
    setTimeLeft(time);
    setIsTicking(false);
  }

  return (
    <div className={styles.wrapper}>
      {isTicking ? (
        <>
          <h3>{timeLeft}</h3>
          <button onClick={handleFinish}>Остановить</button>
        </>
      ) : (
        <>
          <h4>Таймер на {time} секунд</h4>
          <button onClick={handleStart}>Начать</button>
        </>
      )}
    </div>
  );
}
