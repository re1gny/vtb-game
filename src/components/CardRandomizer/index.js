import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function CardRandomizer(props) {
  const { className, title, titleOverlay: TitleOverlay, background, logo: Logo, onRandomize } = props;

  function handleRandomize() {
    onRandomize?.();
  }

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={cn(styles.wrapper, className)}
      onClick={handleRandomize}
    >
      <div className={styles.backgroundOverlay} />
      {Logo && <Logo className={styles.logo} />}
      <div className={styles.titleWrapper}>
        {TitleOverlay && <TitleOverlay className={styles.titleOverlay} />}
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}
