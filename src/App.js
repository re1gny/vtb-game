import React, { useState } from 'react';
import { Game } from './components/Game';
import BackgroundImage1 from './assets/images/background1.png';
import BackgroundImage2 from './assets/images/background2.png';
import styles from './App.module.scss';

function App() {
  const [department, setDepartment] = useState('RETAIL_DEPARTMENT');

  return (
    <div className={styles.wrapper}>
      <img src={BackgroundImage1} className={styles.bgImage1} />
      <img src={BackgroundImage2} className={styles.bgImage2} />
      <Game department={department} />
    </div>
  );
}

export default App;
