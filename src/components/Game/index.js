import React, { useState } from 'react';
import { Board } from '../Board';
import { CHARACTERS } from '../../constants/characters';
import { getBoardByDepartment } from '../../utils/getBoardByDepartment';
import { getInitialCharactersState } from '../../utils/getInitialCharactersState';
import { getNextFieldByFieldId } from '../../utils/getNextFieldByFieldId';
import { Characters } from '../Characters';
import { Actions } from '../Actions';
import { GameLayout } from '../GameLayout';
import { CharacterModal } from '../CharacterModal';
import { PromotionModal } from '../PromotionModal';
import { DEPARTMENT_TITLE } from '../../constants/departments';
import styles from './index.module.scss';

export function Game(props) {
  const { department, onChangeDepartment } = props;
  const board = getBoardByDepartment(department);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [charactersState, setCharactersState] = useState(getInitialCharactersState(CHARACTERS, board));
  const [openedCharacter, setOpenedCharacter] = useState(null);
  const [currentPromotion, setCurrentPromotion] = useState(null);

  function handleCompleteGame() {
    setGameCompleted(true);
  }

  function handleActivateCharacter(characterId) {
    setCharactersState((prev) => ({ ...prev, [characterId]: { ...prev[characterId], active: true } }));
  }

  function handleUseCharacterSuperpower(characterId) {
    setCharactersState((prev) => ({ ...prev, [characterId]: { ...prev[characterId], superpowerAvailable: false } }));
  }

  function handleSkillsAmountChange(characterId, skillsAmount) {
    setCharactersState((prev) => ({ ...prev, [characterId]: { ...prev[characterId], skillsAmount } }));
  }

  function handleField(field) {
    if (field?.type === 'promotion') {
      setCurrentPromotion(field);
    }
  }

  function handleCharacterStep(prevCharactersState, characterId) {
    const nextField = getNextFieldByFieldId(prevCharactersState[characterId].fieldId, board);

    handleField(nextField);

    const nextCharactersState = {
      ...prevCharactersState,
      [characterId]: { ...prevCharactersState[characterId], fieldId: nextField?.id },
    };
    setCharactersState(nextCharactersState);

    return nextCharactersState;
  }

  function handleCharacterMove(characterId, steps) {
    if (!charactersState[characterId]?.active) {
      return;
    }

    let nextCharactersState = charactersState;

    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        nextCharactersState = handleCharacterStep(nextCharactersState, characterId);
      }, i * 100);
    }
  }

  function handleToggleDepartment() {
    onChangeDepartment?.(department === 'CONTACT_CENTER' ? 'RETAIL_DEPARTMENT' : 'CONTACT_CENTER');
  }

  return (
    <GameLayout className={styles.wrapper}>
      <Characters
        className={styles.characters}
        characters={CHARACTERS}
        charactersState={charactersState}
        gameCompleted={gameCompleted}
        onOpenCharacter={setOpenedCharacter}
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
      <Actions className={styles.actions} gameCompleted={gameCompleted} onCompleteGame={handleCompleteGame} />
      <CharacterModal
        opened={!!openedCharacter}
        character={openedCharacter}
        gameCompleted={gameCompleted}
        onClose={() => setOpenedCharacter(null)}
      />
      <PromotionModal opened={!!currentPromotion} onClose={() => setCurrentPromotion(null)} />
    </GameLayout>
  );
}
