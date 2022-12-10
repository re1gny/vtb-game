import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

export function CharacterAvatar(props) {
  const { className, character, gameCompleted } = props;
  const { avatar, qr, avatarBorder: AvatarBorder } = character;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={cn(styles.image, gameCompleted ? styles.qr : styles.avatar)}
        style={{ backgroundImage: `url(${gameCompleted ? qr : avatar})` }}
      />
      {AvatarBorder && <AvatarBorder className={styles.border} />}
    </div>
  );
}
