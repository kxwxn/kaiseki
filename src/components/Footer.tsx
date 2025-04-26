import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button className={styles.button}>기능1</button>
      <button className={styles.button}>기능2</button>
      <button className={styles.button}>기능3</button>
      <button className={styles.button}>기능4</button>
    </footer>
  );
}; 