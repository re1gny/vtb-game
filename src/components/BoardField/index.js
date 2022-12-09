import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function BoardField(props) {
  const { field, style } = props;

  const Logo = field?.logo;

  return (
    <div className={cn(styles.wrapper, styles[field?.type])} style={style}>
      {Logo && <Logo className={styles.logo} />}
    </div>
  );
}
