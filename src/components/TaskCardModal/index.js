import React from 'react';
import { ReactComponent as TaskCardName } from '../../assets/icons/taskCardName.svg';
import { Modal } from '../Modal';
import { TaskCardContent } from '../TaskCardContent';
import styles from './index.module.scss';

export function TaskCardModal(props) {
  const { opened, card, onClose } = props;

  return (
    <Modal className={styles.wrapper} opened={opened} onClose={onClose}>
      <div className={styles.header}>
        <TaskCardName className={styles.name} />
      </div>
      <TaskCardContent className={styles.content} card={card} />
    </Modal>
  );
}
