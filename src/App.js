import React, { useState } from 'react';
import { Board } from './components/Board';
import { CharacterBlock } from './components/CharacterBlock';
import { CardGenerator } from './components/CardGenerator';
import { Timer } from './components/Timer';
import { initBoard } from './utils/initBoard';
import { initCharacters } from './utils/initCharacters';
import { BOARD } from './constants/boards';
import { CHARACTERS } from './constants/characters';
import { getFieldBySteps } from './utils/getFieldBySteps';
import styles from './App.module.scss';

function App() {
  const [board] = useState(initBoard(BOARD));
  const [characters, setCharacters] = useState(initCharacters(CHARACTERS));

  const timers = [15, 30, 60];
  const cardGenerators = [
    {
      title: 'Генератор карточек заданий',
      cards: [],
    },
    {
      title: 'Генератор карточек шанс',
      cards: [],
    },
    {
      title: 'Генератор карточек навыки',
      cards: [],
    },
  ];

  function handleActivateCharacter(character) {
    setCharacters((prev) =>
      prev.map((current) =>
        current.id === character.id ? { ...current, active: true, field: board.fields[0] } : current
      )
    );
  }

  function handleSkillsAmountChange(character, amount) {
    setCharacters((prev) =>
      prev.map((current) => (current.id === character.id ? { ...current, skillsAmount: amount } : current))
    );
  }

  function handleCharacterMove(character, steps) {
    setCharacters((prev) =>
      prev.map((current) =>
        current.id === character.id
          ? { ...current, field: getFieldBySteps(board.fields, current.field, steps) }
          : current
      )
    );
  }

  return (
    <div>
      <div className={styles.characters}>
        {characters.map((character) => (
          <CharacterBlock
            key={character.id}
            {...character}
            onMove={(steps) => handleCharacterMove(character, steps)}
            onSkillsAmountChange={(amount) => handleSkillsAmountChange(character, amount)}
            onActivate={() => handleActivateCharacter(character)}
          />
        ))}
      </div>
      <div className={styles.timers}>
        {timers.map((time) => (
          <Timer key={time} time={time} />
        ))}
      </div>
      <div className={styles.cardGenerators}>
        {cardGenerators.map(({ title, cards }) => (
          <CardGenerator key={title} title={title} cards={cards} />
        ))}
      </div>
      <Board board={board} characters={characters} />
    </div>
  );
}

export default App;
