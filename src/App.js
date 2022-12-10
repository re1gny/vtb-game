import React, { useState } from 'react';
import { Game } from './components/Game';

function App() {
  const [department, setDepartment] = useState('RETAIL_DEPARTMENT');

  return <Game department={department} onChangeDepartment={setDepartment} />;
}

export default App;
