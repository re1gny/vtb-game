import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function Modal(props) {
  const { className, opened, children, onClose } = props;

  if (!opened) {
    return null;
  }

  return (
    <div className={styles.wrapper} onClick={onClose}>
      <div className={cn(styles.content, className)} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
