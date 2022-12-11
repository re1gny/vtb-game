import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function CharacterAvatar(props) {
  const { className, character, characterState, gameCompleted } = props;
  const AvatarBorder = character?.avatarBorder;

  const showQr = gameCompleted && characterState?.active;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={cn(styles.image, showQr ? styles.qr : styles.avatar)}
        style={{ backgroundImage: `url(${showQr ? character?.qr : character?.avatar})` }}
      />
      {AvatarBorder && <AvatarBorder className={styles.border} />}
    </div>
  );
}
