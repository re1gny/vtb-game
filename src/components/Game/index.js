import React, { useState } from 'react';
import cn from 'classnames';
import { CHARACTERS } from '../../constants/characters';
import { getBoardByDepartment } from '../../utils/getBoardByDepartment';
import { getNextFieldByFieldId } from '../../utils/getNextFieldByFieldId';
import { CharactersBlock } from '../CharactersBlock';
import { ActionsBlock } from '../ActionsBlock';
import { BoardBlock } from '../BoardBlock';
import { GameLayout } from '../GameLayout';
import { CharacterModal } from '../CharacterModal';
import { PromotionModal } from '../PromotionModal';
import { WinnerCongratulationsModal } from '../WinnerCongratulationsModal';
import { NotEnoughSkillsForPromotionModal } from '../NotEnoughSkillsForPromotionModal';
import { getWinners } from '../../utils/getWinners';
import { ChanceCardModal } from '../ChanceCardModal';
import { getRandomCard } from '../../utils/getRandomCard';
import { CHANCE_CARDS, SKILL_CARDS, TASK_CARDS } from '../../constants/cards';
import { STEP_DURATION } from '../../constants/durations';
import { SkillCardModal } from '../SkillCardModal';
import { TaskCardModal } from '../TaskCardModal';
import { getFieldByPosition } from '../../utils/getFieldByPosition';
import { useCharactersState } from '../../hooks/useCharactersState';
import { promisifiedSetTimeout } from '../../utils/promisifiedSetTimeout';
import styles from './index.module.scss';

export function Game(props) {
  const { className, department } = props;
  const board = getBoardByDepartment(department);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [charactersStateRef, setCharactersStateRef] = useCharactersState(board);
  const [openedCharacter, setOpenedCharacter] = useState(null);
  const [currentPromotion, setCurrentPromotion] = useState(null);
  const [currentPromotionWithNotEnoughSkills, setCurrentPromotionWithNotEnoughSkills] = useState(null);
  const [chanceCard, setChanceCard] = useState(null);
  const [skillCard, setSkillCard] = useState(null);
  const [taskCard, setTaskCard] = useState(null);
  const [winners, setWinners] = useState(null);
  const [leftChanceCards, setLeftChanceCards] = useState(CHANCE_CARDS);
  const [leftTaskCards, setLeftTaskCards] = useState(TASK_CARDS);
  const [leftSkillCards, setLeftSkillCards] = useState(SKILL_CARDS);

  function handleOpenCharacter(characterId) {
    const character = CHARACTERS.find(({ id }) => id === characterId);
    setOpenedCharacter(character);
  }

  function handleCompleteGame() {
    setGameCompleted(true);
    setWinners(getWinners(CHARACTERS, charactersStateRef.current, board));
  }

  function handleActivateCharacter(characterId) {
    const prev = charactersStateRef.current;
    const newState = { ...prev, [characterId]: { ...prev[characterId], active: true } };
    setCharactersStateRef(newState);
    handleOpenCharacter(characterId);
  }

  function handleUseCharacterSuperpower(characterId) {
    const prev = charactersStateRef.current;
    const newState = { ...prev, [characterId]: { ...prev[characterId], superpowerAvailable: false } };
    setCharactersStateRef(newState);
  }

  function handleSkillsAmountChange(characterId, skillsAmount) {
    const prev = charactersStateRef.current;
    const newState = { ...prev, [characterId]: { ...prev[characterId], skillsAmount } };
    setCharactersStateRef(newState);
  }

  function handleRandomizeSkill() {
    const card = getRandomCard(leftSkillCards);

    if (card) {
      setLeftSkillCards((prev) => prev.filter(({ id }) => id !== card.id));
      setSkillCard(card);
    }
  }

  function handleRandomizeTask() {
    const card = getRandomCard(leftTaskCards);

    if (card) {
      setLeftTaskCards((prev) => prev.filter(({ id }) => id !== card.id));
      setTaskCard(card);
    }
  }

  function handleRandomizeChance() {
    const card = getRandomCard(leftChanceCards);

    if (card) {
      setLeftChanceCards((prev) => prev.filter(({ id }) => id !== card.id));
      setChanceCard(card);
    }
  }

  function handlePassedCharacterSteps(passedFields) {
    const lastPassedField = passedFields?.[passedFields?.length - 1];

    if (
      lastPassedField?.id &&
      lastPassedField.id === getFieldByPosition(board.path[board.path.length - 1], board)?.id
    ) {
      handleCompleteGame();
      return;
    }

    if (passedFields?.some(({ type }) => type === 'promotion')) {
      setCurrentPromotion([...passedFields].reverse().find(({ type }) => type === 'promotion'));
    }

    if (lastPassedField?.type === 'chance') {
      handleRandomizeChance();
    }
  }

  function validateCharacterStep(characterId, nextField) {
    if (!nextField) {
      return false;
    }

    const currentCharacterSkills = charactersStateRef.current[characterId]?.skillsAmount;

    if (nextField.type === 'promotion' && currentCharacterSkills < nextField.skillsRequired) {
      setCurrentPromotionWithNotEnoughSkills(nextField);
      return false;
    }

    return true;
  }

  async function handleCharacterMove(characterId, steps) {
    const passedFields = [];

    for (let step = 1; step <= steps; step++) {
      const prev = charactersStateRef.current;
      const nextField = getNextFieldByFieldId(prev[characterId]?.fieldId, board);

      if (validateCharacterStep(characterId, nextField)) {
        passedFields.push(nextField);
      } else {
        break;
      }

      const newState = { ...prev, [characterId]: { ...prev[characterId], fieldId: nextField.id } };
      setCharactersStateRef(newState);

      await promisifiedSetTimeout(() => undefined, STEP_DURATION);
    }

    if (passedFields.length) {
      handlePassedCharacterSteps(passedFields);
    }
  }

  return (
    <GameLayout className={cn(styles.wrapper, className)}>
      <CharactersBlock
        className={styles.characters}
        characters={CHARACTERS}
        charactersState={charactersStateRef.current}
        gameCompleted={gameCompleted}
        onOpenCharacter={handleOpenCharacter}
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
        charactersState={charactersStateRef.current}
        stepDuration={STEP_DURATION}
      />
      <ActionsBlock
        className={styles.actions}
        gameCompleted={gameCompleted}
        taskCards={leftTaskCards}
        skillCards={leftSkillCards}
        onCompleteGame={handleCompleteGame}
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
        characterState={charactersStateRef.current[openedCharacter?.id]}
        gameCompleted={gameCompleted}
        onClose={() => setOpenedCharacter(null)}
      />
      <NotEnoughSkillsForPromotionModal
        opened={!!currentPromotionWithNotEnoughSkills}
        promotion={currentPromotionWithNotEnoughSkills}
        onClose={() => setCurrentPromotionWithNotEnoughSkills(null)}
      />
    </GameLayout>
  );
}
