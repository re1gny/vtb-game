import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import styles from './index.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className={styles.app} />
  </React.StrictMode>
);
