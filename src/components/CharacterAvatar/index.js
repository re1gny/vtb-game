import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function CharacterAvatar(props) {
  const { className, character, characterState, gameCompleted } = props;
  const { avatar, qr, avatarBorder: AvatarBorder } = character;
  const { active } = characterState;

  const showQr = gameCompleted && active;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={cn(styles.image, showQr ? styles.qr : styles.avatar)}
        style={{ backgroundImage: `url(${showQr ? qr : avatar})` }}
      />
      {AvatarBorder && <AvatarBorder className={styles.border} />}
    </div>
  );
}
