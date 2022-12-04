import React, { useState } from 'react';
import styles from './index.module.scss';

export function CharacterBlock(props) {
  const { name, skillsAmount, active, onMove, onSkillsAmountChange, onActivate } = props;
  const [moveAmount, setMoveAmount] = useState(0);

  function handleMove() {
    onMove?.(moveAmount);
    setMoveAmount(0);
  }

  return (
    <div className={styles.wrapper}>
      <h3>{name}</h3>
      {active ? (
        <>
          <label>
            Количество навыков:
            <input type="number" value={skillsAmount} onChange={(event) => onSkillsAmountChange(+event.target.value)} />
          </label>
          <input type="number" value={moveAmount} onChange={(event) => setMoveAmount(+event.target.value)} />
          <button onClick={handleMove}>Перейти</button>
        </>
      ) : (
        <button onClick={onActivate}>Выбрать</button>
      )}
    </div>
  );
}
