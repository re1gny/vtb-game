import React, { useState } from 'react';
import { Game } from './components/Game';
import { GameSelector } from './components/GameSelector';

function App() {
  const [department, setDepartment] = useState(null);

  return department ? <Game department={department} /> : <GameSelector onSelectDepartment={setDepartment} />;
}

export default App;
