import React from 'react';
import { ReactComponent as TaskCardName } from '../../assets/icons/taskCardName.svg';
import { Modal } from '../Modal';
import { TaskCardResolver } from '../TaskCardResolver';
import styles from './index.module.scss';

export function TaskCardModal(props) {
  const { opened, card, onClose } = props;

  return (
    <Modal className={styles.wrapper} opened={opened} onClose={onClose}>
      <div className={styles.header}>
        <TaskCardName className={styles.name} />
      </div>
      <TaskCardResolver className={styles.content} card={card} />
    </Modal>
  );
}
