import React from 'react';
import { io } from 'next/cache';

export default async function Footer() {
  await io();

  return (
    <footer style={styles.footer}>
      <p>© All Rights Reserved | {new Date().getFullYear()}</p>
    </footer>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    width: '100%',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    color: '#333',
    borderTop: '1px solid #ccc',
  }
};
