import React, { useRef } from 'react';
import { Modal } from '../Modal';
import { ReactComponent as WinnerCongratulationsLine } from '../../assets/icons/winnerCongratulationsLine.svg';
import { ReactComponent as WinnerCongratulationsStar } from '../../assets/icons/winnerCongratulationsStar.svg';
import { ReactComponent as WinnerCongratulationsCup } from '../../assets/icons/winnerCongratulationsCup.svg';
import styles from './index.module.scss';

export function WinnerCongratulationsModal(props) {
  const { opened, winners, onClose } = props;
  const modalBackdropRef = useRef();
  const modalContentRef = useRef();

  function handleClick(event) {
    const clickPath = document.elementsFromPoint(event.clientX, event.clientY);
    return !(clickPath[0] !== modalContentRef.current && clickPath[1] === modalBackdropRef.current);
  }

  const winnersNames = winners?.reduce((acc, current, index) => {
    if (winners?.length > 1 && index === winners?.length - 1) {
      return `${acc} и ${current?.name}`;
    }

    return [acc, current?.name].filter(Boolean).join(', ');
  }, '');

  return (
    <Modal
      backdropRef={modalBackdropRef}
      contentRef={modalContentRef}
      className={styles.wrapper}
      opened={opened}
      onClose={onClose}
      onClick={handleClick}
    >
      <WinnerCongratulationsStar className={styles.star} />
      <WinnerCongratulationsLine className={styles.line} />
      <WinnerCongratulationsCup className={styles.cup} />
      <div className={styles.title}>Поздравляем победителей!</div>
      <div className={styles.text}>
        {winnersNames} выше всех на карьерной лестнице.
        <br />
        Молодцы!
      </div>
    </Modal>
  );
}
