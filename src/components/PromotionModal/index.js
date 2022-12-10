import React, { useRef } from 'react';
import { Modal } from '../Modal';
import { ReactComponent as PromotionSmallStar } from '../../assets/icons/promotionSmallStar.svg';
import { ReactComponent as PromotionMediumStar } from '../../assets/icons/promotionMediumStar.svg';
import { ReactComponent as PromotionSuperStar } from '../../assets/icons/promotionSuperStar.svg';
import styles from './index.module.scss';

export function PromotionModal(props) {
  const { opened, onClose } = props;
  const modalBackdropRef = useRef();
  const modalContentRef = useRef();

  function handleClick(event) {
    const clickPath = document.elementsFromPoint(event.clientX, event.clientY);
    return !(clickPath[0] !== modalContentRef.current && clickPath[1] === modalBackdropRef.current);
  }

  return (
    <Modal
      backdropRef={modalBackdropRef}
      contentRef={modalContentRef}
      className={styles.wrapper}
      opened={opened}
      onClose={onClose}
      onClick={handleClick}
    >
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
