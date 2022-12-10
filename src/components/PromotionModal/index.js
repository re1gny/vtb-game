import React from 'react';
import { Modal } from '../Modal';
import { ReactComponent as PromotionSmallStar } from '../../assets/icons/promotionSmallStar.svg';
import { ReactComponent as PromotionMediumStar } from '../../assets/icons/promotionMediumStar.svg';
import { ReactComponent as PromotionSuperStar } from '../../assets/icons/promotionSuperStar.svg';
import styles from './index.module.scss';

export function PromotionModal(props) {
  const { opened, onClose } = props;

  return (
    <Modal className={styles.wrapper} opened={opened} onClose={onClose}>
      <PromotionSmallStar className={styles.smallStar} />
      <PromotionMediumStar className={styles.mediumStar} />
      <PromotionSuperStar className={styles.superStar} />
      <div className={styles.text}>
        Поздравляем
        <br />с повышением!
      </div>
    </Modal>
  );
}
