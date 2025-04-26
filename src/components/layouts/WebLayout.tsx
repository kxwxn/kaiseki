import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import styles from './WebLayout.module.css';

interface WebLayoutProps {
  children: React.ReactNode;
}

export const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <div className={styles.webContainer}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}; 