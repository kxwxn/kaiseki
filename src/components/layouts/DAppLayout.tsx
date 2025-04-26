import React from 'react';
import styles from './DAppLayout.module.css';

interface DAppLayoutProps {
  children: React.ReactNode;
}

export const DAppLayout: React.FC<DAppLayoutProps> = ({ children }) => {
  return (
    <div className={styles.dappContainer}>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}; 