import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Game } from './components/Game';
import styles from './App.module.scss';

function App() {
  const [department, setDepartment] = useState('RETAIL_DEPARTMENT');

  return (
    <Layout className={styles.wrapper}>
      <Game department={department} onChangeDepartment={setDepartment} />
    </Layout>
  );
}

export default App;
