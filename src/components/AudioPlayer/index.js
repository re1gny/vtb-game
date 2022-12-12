import React from 'react';
import cn from 'classnames';
import { ReactComponent as AudioStartIcon } from '../../assets/icons/audioStart.svg';
import { ReactComponent as AudioTrackIcon } from '../../assets/icons/audioTrack.svg';
import styles from './index.module.scss';

export function AudioPlayer(props) {
  const { className, src } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      <AudioStartIcon className={styles.playIcon} />
      <div className={styles.track}>
        <AudioTrackIcon className={styles.trackIcon} />
      </div>
    </div>
  );
}
