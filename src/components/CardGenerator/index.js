import React, { useState } from 'react';
import styles from './index.module.scss';

export function CardGenerator(props) {
  const { title, cards } = props;
  const [generatedCard, setGeneratedCard] = useState(null);

  function handleGenerate() {
    setGeneratedCard(Math.round(Math.random() * (cards.length + 100)));
  }

  function handleReset() {
    setGeneratedCard(null);
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        {generatedCard ? (
          <div>
            Карта {generatedCard}
            <button onClick={handleReset}>Сбросить</button>
          </div>
        ) : (
          <button onClick={handleGenerate}>Сгенерировать</button>
        )}
      </div>
    </div>
  );
}
