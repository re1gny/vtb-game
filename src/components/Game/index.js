import React, { useState } from 'react';
import cn from 'classnames';
import { CHARACTERS } from '../../constants/characters';
import { getBoardByDepartment } from '../../utils/getBoardByDepartment';
import { getInitialCharactersState } from '../../utils/getInitialCharactersState';
import { getNextFieldByFieldId } from '../../utils/getNextFieldByFieldId';
import { CharactersBlock } from '../CharactersBlock';
import { ActionsBlock } from '../ActionsBlock';
import { BoardBlock } from '../BoardBlock';
import { GameLayout } from '../GameLayout';
import { CharacterModal } from '../CharacterModal';
import { PromotionModal } from '../PromotionModal';
import { WinnerCongratulationsModal } from '../WinnerCongratulationsModal';
import { getWinners } from '../../utils/getWinners';
import { ChanceCardModal } from '../ChanceCardModal';
import { getRandomCard } from '../../utils/getRandomCard';
import { CHANCE_CARDS, SKILL_CARDS, TASK_CARDS } from '../../constants/cards';
import { SkillCardModal } from '../SkillCardModal';
import { TaskCardModal } from '../TaskCardModal';
import { getFieldsBetweenFieldsIds } from '../../utils/getFieldsBetweenFieldsIds';
import { getFieldByPosition } from '../../utils/getFieldByPosition';
import styles from './index.module.scss';

export function Game(props) {
  const { className, department } = props;
  const board = getBoardByDepartment(department);
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
    const card = getRandomCard(SKILL_CARDS);
    setSkillCard(card);
  }

  function handleRandomizeTask() {
    const card = getRandomCard(TASK_CARDS);
    setTaskCard(card);
  }

  function handleRandomizeChance() {
    const card = getRandomCard(CHANCE_CARDS);
    setChanceCard(card);
  }

  function handlePassedCharacterSteps(initialFieldId, nextFieldId, nextCharactersState) {
    const passedFields = getFieldsBetweenFieldsIds(initialFieldId, nextFieldId, board, { includeEnd: true }) || [];

    const lastPassedField = passedFields[passedFields.length - 1];

    if (
      lastPassedField?.id &&
      lastPassedField.id === getFieldByPosition(board.path[board.path.length - 1], board)?.id
    ) {
      handleCompleteGame(nextCharactersState);
      return;
    }

    if (passedFields.some(({ type }) => type === 'promotion')) {
      setCurrentPromotion([...passedFields].reverse().find(({ type }) => type === 'promotion'));
    }

    if (lastPassedField?.type === 'chance') {
      handleRandomizeChance();
    }
  }

  function handleCharacterStep(characterId, step, steps, initialFieldId) {
    setCharactersState((prev) => {
      const nextField = getNextFieldByFieldId(prev[characterId]?.fieldId, board);

      if (!nextField) {
        handlePassedCharacterSteps(initialFieldId, prev[characterId]?.fieldId, prev);
        return prev;
      }

      const nextCharactersState = {
        ...prev,
        [characterId]: { ...prev[characterId], fieldId: nextField.id },
      };

      if (step === steps) {
        handlePassedCharacterSteps(initialFieldId, nextField.id, nextCharactersState);
      }

      return nextCharactersState;
    });
  }

  function handleCharacterMove(characterId, steps) {
    if (!charactersState[characterId]?.active) {
      return;
    }

    const initialFieldId = charactersState[characterId]?.fieldId;

    for (let step = 1; step <= steps; step++) {
      setTimeout(() => handleCharacterStep(characterId, step, steps, initialFieldId), step * 100);
    }
  }

  return (
    <GameLayout className={cn(styles.wrapper, className)}>
      <CharactersBlock
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
      <BoardBlock
        className={styles.main}
        department={department}
        board={board}
        characters={CHARACTERS}
        charactersState={charactersState}
      />
      <ActionsBlock
        className={styles.actions}
        gameCompleted={gameCompleted}
        onCompleteGame={() => handleCompleteGame(charactersState)}
        onRandomizeSkill={handleRandomizeSkill}
        onRandomizeTask={handleRandomizeTask}
      />
      <WinnerCongratulationsModal opened={!!winners?.length} winners={winners} onClose={() => setWinners(null)} />
      <ChanceCardModal opened={!!chanceCard} card={chanceCard} onClose={() => setChanceCard(null)} />
      <PromotionModal opened={!!currentPromotion} onClose={() => setCurrentPromotion(null)} />
      <SkillCardModal opened={!!skillCard} card={skillCard} onClose={() => setSkillCard(null)} />
      <TaskCardModal opened={!!taskCard} card={taskCard} onClose={() => setTaskCard(null)} />
      <CharacterModal
        opened={!!openedCharacter}
        character={openedCharacter}
        characterState={charactersState[openedCharacter?.id]}
        gameCompleted={gameCompleted}
        onClose={() => setOpenedCharacter(null)}
      />
    </GameLayout>
  );
}
