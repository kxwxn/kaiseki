import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.dataBox}></div>
      <div className={styles.dataBox}></div>
      <div className={styles.dataBox}></div>
    </header>
  );
}; 