import React from 'react';
import { Modal } from '../Modal';
import { pluralize } from '../../utils/pluralize';
import styles from './index.module.scss';

export function NotEnoughSkillsForPromotionModal(props) {
  const { opened, promotion, onClose } = props;

  const Logo = promotion?.notEnoughSkillsLogo;

  return (
    <Modal className={styles.wrapper} opened={opened} onClose={onClose}>
      {Logo && <Logo className={styles.logo} />}
      <div className={styles.title}>Упс!</div>
      <div className={styles.text}>
        Кажется, что вы еще не накопили достаточно знаний, чтобы пройти повышение. Для должности {promotion?.position}{' '}
        нужно {promotion?.skillsRequired} {pluralize(promotion?.skillsRequired, ['навык', 'навыка', 'навыков'])}.
      </div>
    </Modal>
  );
}
