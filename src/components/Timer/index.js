import React, { useRef, useState } from 'react';
import styles from './index.module.scss';

export function Timer(props) {
  const { time } = props;
  const timerRef = useRef(null);
  const [isTicking, setIsTicking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);

  function startTimer(timeLeft) {
    timerRef.current = setTimeout(() => handleTick(timeLeft), 1000);
  }

  function stopTimer() {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  function handleTick(currentTimeLeft) {
    if (currentTimeLeft > 1) {
      const newTimeLeft = currentTimeLeft - 1;
      setTimeLeft(newTimeLeft);
      startTimer(newTimeLeft);
    } else {
      handleFinish();
    }
  }

  function handleStart() {
    setIsTicking(true);
    startTimer(timeLeft);
  }

  function handleFinish() {
    stopTimer();
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
