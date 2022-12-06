import React from 'react';
import styles from './index.module.scss';

export function BoardField(props) {
  const { field, style } = props;

  return (
    <div className={styles.wrapper} style={style}>
      {field.id}
    </div>
  );
}
