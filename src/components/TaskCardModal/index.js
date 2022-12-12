import React from 'react';
import { Modal } from '../Modal';
import { TaskCardResolver } from '../TaskCardResolver';
import styles from './index.module.scss';

export function TaskCardModal(props) {
  const { opened, card, onClose } = props;

  const name = ['Задание', card?.number && `№${card.number}`].filter(Boolean).join(' ');

  return (
    <Modal className={styles.wrapper} opened={opened} onClose={onClose}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
      </div>
      <TaskCardResolver className={styles.content} card={card} />
    </Modal>
  );
}
