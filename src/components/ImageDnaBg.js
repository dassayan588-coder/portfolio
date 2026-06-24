'use client';

import { useEffect, useRef } from 'react';
import styles from './ImageDnaBg.module.css';

export default function ImageDnaBg() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;
      // Calculate mouse position relative to center of screen
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // 40px pan
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      
      // Apply translation to create parallax depth
      bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.container}>
      <img 
        ref={bgRef}
        src="/dna-bg.png" 
        alt="DNA Background" 
        className={styles.image}
      />
    </div>
  );
}
