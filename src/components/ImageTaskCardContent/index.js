import React from 'react';
import { BaseTaskCardContent } from '../BaseTaskCardContent';
import styles from './index.module.scss';

export function ImageTaskCardContent(props) {
  const { className, card } = props;

  return (
    <BaseTaskCardContent className={className} card={card}>
      {card?.image && <img className={styles.image} src={card.image} />}
    </BaseTaskCardContent>
  );
}
