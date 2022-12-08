import React from 'react';
import cn from 'classnames';
import { ReactComponent as VTBLogoIcon } from '../../assets/icons/vtbLogo.svg';
import styles from './index.module.scss';

export function Layout(props) {
  const { className, children } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      <VTBLogoIcon className={styles.logo} />
      {children}
    </div>
  );
}
