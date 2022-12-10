import React from 'react';
import ChanceAndSkillCardsBackground from '../../assets/icons/chanceAndSkillCardsBackground.svg';
import { ReactComponent as ChanceCardName } from '../../assets/icons/chanceCardName.svg';
import { Modal } from '../Modal';
import styles from './index.module.scss';

export function ChanceCardModal(props) {
  const { opened, card, onClose } = props;

  return (
    <Modal
      className={styles.wrapper}
      style={{ backgroundImage: `url(${ChanceAndSkillCardsBackground})` }}
      opened={opened}
      onClose={onClose}
    >
      <div className={styles.content}>
        <ChanceCardName className={styles.name} />
        <div className={styles.title}>{card?.title}</div>
        <div className={styles.description}>{card?.description}</div>
      </div>
    </Modal>
  );
}
