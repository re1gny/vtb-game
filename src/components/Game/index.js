import React, { useState } from 'react';
import { Board } from '../Board';
import { CHARACTERS } from '../../constants/characters';
import { getBoardByDepartment } from '../../utils/getBoardByDepartment';
import { getInitialCharactersState } from '../../utils/getInitialCharactersState';
import { getNextFieldIdByFieldId } from '../../utils/getNextFieldIdByFieldId';
import { Characters } from '../Characters';
import { Actions } from '../Actions';
import { DEPARTMENT_TITLE } from '../../constants/departments';
import styles from './index.module.scss';

export function Game(props) {
  const { department, onChangeDepartment } = props;
  const board = getBoardByDepartment(department);
  const [charactersState, setCharactersState] = useState(getInitialCharactersState(CHARACTERS, board));

  function handleActivateCharacter(characterId) {
    setCharactersState((prev) => ({ ...prev, [characterId]: { ...prev[characterId], active: true } }));
  }

  function handleUseCharacterSuperpower(characterId) {
    setCharactersState((prev) => ({ ...prev, [characterId]: { ...prev[characterId], superpowerAvailable: false } }));
  }

  function handleSkillsAmountChange(characterId, skillsAmount) {
    setCharactersState((prev) => ({ ...prev, [characterId]: { ...prev[characterId], skillsAmount } }));
  }

  function handleCharacterMove(characterId, steps) {
    if (!charactersState[characterId]?.active) {
      return;
    }

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        setCharactersState((prev) => {
          const fieldId = getNextFieldIdByFieldId(prev[characterId].fieldId, board);
          return { ...prev, [characterId]: { ...prev[characterId], fieldId } };
        });
      }, i * 100);
    }
  }

  function handleToggleDepartment() {
    onChangeDepartment?.(department === 'CONTACT_CENTER' ? 'RETAIL_DEPARTMENT' : 'CONTACT_CENTER');
  }

  return (
    <div className={styles.wrapper}>
      <Characters
        className={styles.characters}
        characters={CHARACTERS}
        charactersState={charactersState}
        onActivate={handleActivateCharacter}
        onUseSuperpower={handleUseCharacterSuperpower}
        onSkillsAmountChange={handleSkillsAmountChange}
        onMove={handleCharacterMove}
      />
      <div className={styles.main}>
        <div className={styles.titleWrapper}>
          <div className={styles.title} onClick={handleToggleDepartment}>
            {DEPARTMENT_TITLE[department]}
          </div>
        </div>
        <Board className={styles.board} board={board} characters={CHARACTERS} charactersState={charactersState} />
      </div>
      <Actions className={styles.actions} />
    </div>
  );
}
