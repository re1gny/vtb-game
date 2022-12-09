import React, { Fragment } from 'react';
import cn from 'classnames';
import { Character } from '../Character';
import { CharacterState } from '../CharacterState';
import styles from './index.module.scss';

export function Characters(props) {
  const { className, characters, charactersState, onActivate, onSkillsAmountChange, onMove, onUseSuperpower } = props;

  return (
    <div className={cn(styles.wrapper, className)}>
      {characters?.map((character) => (
        <Fragment key={character?.id}>
          <Character
            {...character}
            {...charactersState?.[character?.id]}
            onActivate={() => onActivate?.(character?.id)}
            onUseSuperpower={() => onUseSuperpower?.(character?.id)}
          />
          <CharacterState
            {...character}
            {...charactersState?.[character?.id]}
            onActivate={() => onActivate?.(character?.id)}
            onSkillsAmountChange={(value) => onSkillsAmountChange?.(character?.id, value)}
            onMove={(steps) => onMove?.(character?.id, steps)}
          />
        </Fragment>
      ))}
    </div>
  );
}
