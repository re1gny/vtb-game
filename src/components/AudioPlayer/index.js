import React, { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import cn from 'classnames';
import { ReactComponent as AudioStartIcon } from '../../assets/icons/audioStart.svg';
import { ReactComponent as AudioPauseIcon } from '../../assets/icons/audioPause.svg';
import { ReactComponent as AudioTrackIcon } from '../../assets/icons/audioTrack.svg';
import styles from './index.module.scss';

export function AudioPlayer(props) {
  const { className, src } = props;
  const soundRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const percentComplete = (position / duration) * 100 || 0;

  function play() {
    if (soundRef.current) {
      soundRef.current.play();
    }
  }

  function pause() {
    if (soundRef.current) {
      soundRef.current.pause();
    }
  }

  useEffect(() => {
    const sound = new Howl({ src: [src] });
    soundRef.current = sound;

    soundRef.current?.on('play', () => setPlaying(true));
    soundRef.current?.on('pause', () => setPlaying(false));
    soundRef.current?.on('stop', () => setPlaying(false));
    soundRef.current?.on('end', () => setPlaying(false));
    soundRef.current?.on('loaderror', () => setPlaying(false));
    soundRef.current?.on('playerror', () => setPlaying(false));
    soundRef.current?.on('load', () => setDuration(soundRef.current?.duration()));

    return () => {
      sound?.unload();
    };
  }, [src]);

  useEffect(() => {
    let raf = null;

    function loopPositionGetting() {
      setPosition(soundRef.current?.seek());
      raf = requestAnimationFrame(loopPositionGetting);
    }

    loopPositionGetting();

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [src]);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.playPauseIconWrapper}>
        {playing ? (
          <AudioPauseIcon className={styles.pauseIcon} onClick={pause} />
        ) : (
          <AudioStartIcon className={styles.playIcon} onClick={play} />
        )}
      </div>
      <div className={styles.track}>
        <AudioTrackIcon className={styles.trackIcon} />
        <div className={styles.trackOverlay} style={{ '--percentComplete': `${percentComplete}%` }} />
      </div>
    </div>
  );
}
