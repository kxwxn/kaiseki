'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [points, setPoints] = useState(0);

  const handleClick = () => {
    setPoints(prev => prev + 1);
  };

  return (
    <div className={styles.container}>
      <p className={styles.points}>포인트: {points}</p>
      <button 
        onClick={handleClick}
        className={styles.clickButton}
      >
        클릭!
      </button>
    </div>
  );
}
