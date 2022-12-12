import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function Timer(props) {
  const { className, time } = props;
  const timerRef = useRef(null);
  const [isTicking, setIsTicking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);

  const displayTimeLeft = [
    Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, '0'),
    (timeLeft % 60).toString().padStart(2, '0'),
  ].join(':');

  function startTimer(timeLeft) {
    timerRef.current = setTimeout(() => handleTick(timeLeft), 1000);
  }

  function stopTimer() {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  function handleTick(currentTimeLeft) {
    if (currentTimeLeft > 0) {
      const newTimeLeft = currentTimeLeft - 1;
      setTimeLeft(newTimeLeft);
      startTimer(newTimeLeft);
    } else {
      stopTimer();
    }
  }

  function handleStart() {
    setIsTicking(true);
    startTimer(timeLeft);
  }

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <button className={cn(styles.wrapper, isTicking && styles.isTicking, className)} onClick={handleStart}>
      {displayTimeLeft}
    </button>
  );
}
