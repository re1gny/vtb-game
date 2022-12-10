import React from 'react';
import ChanceAndSkillCardsBackground from '../../assets/icons/chanceAndSkillCardsBackground.svg';
import { ReactComponent as SkillCardName } from '../../assets/icons/skillCardName.svg';
import { Modal } from '../Modal';
import styles from './index.module.scss';

export function SkillCardModal(props) {
  const { opened, card, onClose } = props;

  return (
    <Modal
      className={styles.wrapper}
      style={{ backgroundImage: `url(${ChanceAndSkillCardsBackground})` }}
      opened={opened}
      onClose={onClose}
    >
      <div className={styles.content}>
        <SkillCardName className={styles.name} />
        <div className={styles.title}>{card?.title}</div>
        <div className={styles.description}>{card?.description}</div>
      </div>
    </Modal>
  );
}
