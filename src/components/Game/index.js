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
import { WinnerCongratulationsModal } from '../WinnerCongratulationsModal';
import { DEPARTMENT_TITLE } from '../../constants/departments';
import { getWinners } from '../../utils/getWinners';
import { getFieldIndexByFieldId } from '../../utils/getFieldIndexByFieldId';
import { ChanceCardModal } from '../ChanceCardModal';
import { getRandomCard } from '../../utils/getRandomCard';
import { CHANCE_CARDS, SKILL_CARDS, TASK_CARDS } from '../../constants/cards';
import { SkillCardModal } from '../SkillCardModal';
import { TaskCardModal } from '../TaskCardModal';
import styles from './index.module.scss';

export function Game(props) {
  const { department } = props;
  const board = getBoardByDepartment(department);
  const [leftChanceCards, setLeftChanceCard] = useState(CHANCE_CARDS);
  const [leftSkillCards, setLeftSkillCard] = useState(SKILL_CARDS);
  const [leftTaskCards, setLeftTaskCard] = useState(TASK_CARDS);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [charactersState, setCharactersState] = useState(getInitialCharactersState(CHARACTERS, board));
  const [openedCharacter, setOpenedCharacter] = useState(null);
  const [currentPromotion, setCurrentPromotion] = useState(null);
  const [chanceCard, setChanceCard] = useState(null);
  const [skillCard, setSkillCard] = useState(null);
  const [taskCard, setTaskCard] = useState(null);
  const [winners, setWinners] = useState(null);

  function handleCompleteGame(charactersState) {
    setGameCompleted(true);
    setWinners(getWinners(CHARACTERS, charactersState, board));
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

  function handleRandomizeSkill() {
    const card = getRandomCard(leftSkillCards);

    if (card) {
      setLeftSkillCard((prev) => prev.filter(({ id }) => id !== card.id));
      setSkillCard(card);
    }
  }

  function handleRandomizeTask() {
    const card = getRandomCard(leftTaskCards);

    if (card) {
      setLeftTaskCard((prev) => prev.filter(({ id }) => id !== card.id));
      setTaskCard(card);
    }
  }

  function handleRandomizeChance() {
    const card = getRandomCard(leftChanceCards);

    if (card) {
      setLeftChanceCard((prev) => prev.filter(({ id }) => id !== card.id));
      setChanceCard(card);
    }
  }

  function handleField(field, charactersState) {
    if (getFieldIndexByFieldId(field?.id, board) === board?.path?.length - 1) {
      handleCompleteGame(charactersState);
      return;
    }

    if (field?.type === 'promotion') {
      setCurrentPromotion(field);
    }

    if (field?.type === 'chance') {
      handleRandomizeChance();
    }
  }

  function handleCharacterStep(prevCharactersState, characterId) {
    const nextField = getNextFieldByFieldId(prevCharactersState[characterId].fieldId, board);

    if (!nextField) {
      return prevCharactersState;
    }

    const nextCharactersState = {
      ...prevCharactersState,
      [characterId]: { ...prevCharactersState[characterId], fieldId: nextField?.id },
    };

    handleField(nextField, nextCharactersState);
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
          <div className={styles.title}>{DEPARTMENT_TITLE[department]}</div>
        </div>
        <Board className={styles.board} board={board} characters={CHARACTERS} charactersState={charactersState} />
      </div>
      <Actions
        className={styles.actions}
        gameCompleted={gameCompleted}
        skillCards={leftSkillCards}
        taskCards={leftTaskCards}
        onCompleteGame={() => handleCompleteGame(charactersState)}
        onRandomizeSkill={handleRandomizeSkill}
        onRandomizeTask={handleRandomizeTask}
      />
      <CharacterModal
        opened={!!openedCharacter}
        character={openedCharacter}
        characterState={charactersState[openedCharacter?.id]}
        gameCompleted={gameCompleted}
        onClose={() => setOpenedCharacter(null)}
      />
      <PromotionModal opened={!!currentPromotion} onClose={() => setCurrentPromotion(null)} />
      <WinnerCongratulationsModal opened={!!winners?.length} winners={winners} onClose={() => setWinners(null)} />
      <ChanceCardModal opened={!!chanceCard} card={chanceCard} onClose={() => setChanceCard(null)} />
      <SkillCardModal opened={!!skillCard} card={skillCard} onClose={() => setSkillCard(null)} />
      <TaskCardModal opened={!!taskCard} card={taskCard} onClose={() => setTaskCard(null)} />
    </GameLayout>
  );
}
