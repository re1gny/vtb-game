import React from 'react';
import cn from 'classnames';
import { BaseTaskCardContent } from '../BaseTaskCardContent';
import styles from './index.module.scss';

export function AnswersTaskCardContent(props) {
  const { className, card } = props;

  return (
    <BaseTaskCardContent className={className} card={card} withAnswer={false}>
      {({ showAnswer, onShowAnswer }) =>
        !!card?.answers?.length && (
          <div className={cn(styles.answers, showAnswer && styles.answerShown)}>
            {card.answers.map(({ text, sign: Sign, correct }, index) => (
              <div key={index} className={cn(styles.answer, correct && styles.correct)} onClick={onShowAnswer}>
                {Sign && <Sign className={styles.answerSign} />}
                <div className={styles.answerText}>{text}</div>
              </div>
            ))}
          </div>
        )
      }
    </BaseTaskCardContent>
  );
}
