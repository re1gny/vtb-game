import React, { useState } from 'react';
import { Board } from './components/Board';
import { Character } from './components/Character';
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

  function handleActivateCharacter(character) {
    setCharacters((prev) =>
      prev.map((current) =>
        current.id === character.id ? { ...current, active: true, field: board.fields[0].id } : current
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
          ? { ...current, field: getFieldBySteps(board.fields, current.field, steps).id }
          : current
      )
    );
  }

  return (
    <div>
      <div className={styles.characters}>
        {characters.map((character) => (
          <Character
            key={character.id}
            {...character}
            onMove={(steps) => handleCharacterMove(character, steps)}
            onSkillsAmountChange={(amount) => handleSkillsAmountChange(character, amount)}
            onActivate={() => handleActivateCharacter(character)}
          />
        ))}
      </div>
      <Board board={board} characters={characters} />
    </div>
  );
}

export default App;
