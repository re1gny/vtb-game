import React, { useState } from 'react';
import { ReactComponent as AudioTextIcon } from '../../assets/icons/audioText.svg';
import { BaseTaskCardContent } from '../BaseTaskCardContent';
import styles from './index.module.scss';
import { AudioPlayer } from '../AudioPlayer';

export function AudioTaskCardContent(props) {
  const { className, card } = props;
  const [showFallback, setShowFallback] = useState(false);

  return (
    <BaseTaskCardContent
      className={className}
      card={showFallback ? { ...card, description: card?.fallbackDescription } : card}
    >
      {!showFallback && card?.audio && (
        <div className={styles.playerWrapper}>
          <AudioPlayer className={styles.player} src={card.audio} />
          {/*<AudioTextIcon className={styles.audioTextIcon} onClick={() => setShowFallback(true)} />*/}
        </div>
      )}
    </BaseTaskCardContent>
  );
}
