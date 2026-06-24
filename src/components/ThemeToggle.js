'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial state from body class
    setIsLight(document.body.classList.contains('light-mode'));
  }, []);

  const toggleTheme = () => {
    const isNowLight = !isLight;
    setIsLight(isNowLight);
    
    if (isNowLight) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }

    // Dispatch event so WebGLBackground can listen and adjust blending
    window.dispatchEvent(new Event('theme-changed'));
  };

  return (
    <button 
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '1.5rem',
        right: '1.5rem',
        zIndex: 100,
        background: 'var(--color-card-bg)',
        border: '1px solid var(--color-card-border)',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        color: 'var(--color-text)',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
      aria-label="Toggle Theme"
      onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-card-hover)'}
      onMouseOut={(e) => e.currentTarget.style.background = 'var(--color-card-bg)'}
    >
      {isLight ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
}
