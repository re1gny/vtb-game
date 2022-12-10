import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function CardRandomizer(props) {
  const { className, background, logo: Logo, gameCompleted, onRandomize } = props;

  function handleRandomize() {
    if (!gameCompleted) {
      onRandomize?.();
    }
  }

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={cn(styles.wrapper, gameCompleted && styles.gameCompleted, className)}
      onClick={handleRandomize}
    >
      <div className={styles.backgroundOverlay} />
      {Logo && <Logo className={styles.logo} />}
    </div>
  );
}
