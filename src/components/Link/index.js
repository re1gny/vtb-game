import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function Link(props) {
  const { className, href, children } = props;

  return (
    <a className={cn(styles.wrapper, className)} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
