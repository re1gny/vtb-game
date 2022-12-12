import React from 'react';
import { BaseTaskCardContent } from '../BaseTaskCardContent';
import styles from './index.module.scss';
import cn from 'classnames';

export function ListTaskCardContent(props) {
  const { className, card } = props;

  return (
    <BaseTaskCardContent className={className} card={card}>
      {!!card?.items?.length && (
        <div className={styles.list} style={{ '--columns': (card?.columns || 1).toString() }}>
          {card.items.map((item, index) => (
            <div key={index} className={cn(styles.item, card.items.length === 1 && styles.large)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </BaseTaskCardContent>
  );
}
