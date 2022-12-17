import React, { useState } from 'react';
import cn from 'classnames';
import { Timer } from '../Timer';
import { Link } from '../Link';
import styles from './index.module.scss';

export function BaseTaskCardContent(props) {
  const {
    className,
    card,
    children,
    withTitle = true,
    withDescription = true,
    withSubDescription = true,
    withTimer = true,
    withAnswer = true,
  } = props;
  const [showAnswer, setShowAnswer] = useState(false);

  function onShowAnswer() {
    setShowAnswer(true);
  }

  function renderChildren() {
    if (!children) {
      return null;
    }

    if (typeof children === 'function') {
      return <div className={styles.children}>{children({ showAnswer, onShowAnswer })}</div>;
    }

    return <div className={styles.children}>{children}</div>;
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      {card?.number && <div className={styles.number}>№{card.number}</div>}
      {withTitle && card?.title && <div className={styles.title}>{card.title}</div>}
      {withDescription && card?.description && <div className={styles.description}>{card.description}</div>}
      {renderChildren()}
      {withSubDescription && card?.subDescription && <div className={styles.subDescription}>{card.subDescription}</div>}
      {withTimer && card?.timer && <Timer className={styles.timer} time={card.timer} />}
      {withAnswer && (card?.answer || card?.answerLink) && (
        <div className={styles.answer}>
          {showAnswer ? (
            <>
              <div className={styles.answerText}>Ответ: {card?.answer || ''}</div>
              {card?.answerLink && (
                <Link className={styles.answerLink} href={card.answerLink}>
                  {card.answerLink}
                </Link>
              )}
            </>
          ) : (
            <button className={styles.answerButton} onClick={onShowAnswer}>
              Ответ
            </button>
          )}
        </div>
      )}
    </div>
  );
}
