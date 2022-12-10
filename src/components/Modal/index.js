import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function Modal(props) {
  const { className, style, backdropRef, contentRef, opened, children, onClose, onClick } = props;

  function handleModalClick(event) {
    const shouldKeep = onClick?.(event);

    if (shouldKeep !== false) {
      event?.stopPropagation();
    }
  }

  if (!opened) {
    return null;
  }

  return (
    <div ref={backdropRef} className={styles.wrapper} onClick={onClose}>
      <div ref={contentRef} className={cn(styles.content, className)} style={style} onClick={handleModalClick}>
        {children}
      </div>
    </div>
  );
}
