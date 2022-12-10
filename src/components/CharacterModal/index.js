import React from 'react';
import { Modal } from '../Modal';
import { CharacterAvatar } from '../CharacterAvatar';
import styles from './index.module.scss';

export function CharacterModal(props) {
  const { opened, character, gameCompleted, onClose } = props;

  return (
    <Modal className={styles.wrapper} opened={opened} onClose={onClose}>
      <div className={styles.avatarBackdrop} />
      <div className={styles.name}>{character?.name}</div>
      <CharacterAvatar className={styles.avatar} character={character} gameCompleted={gameCompleted} />
      <div className={styles.description}>{character?.description}</div>
      <div className={styles.superpower}>Суперсила (используется 1 раз за игру): {character?.superpower}</div>
    </Modal>
  );
}
