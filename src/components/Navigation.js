'use client';

import { useState } from 'react';
import styles from './Navigation.module.css';
import { Menu, Home, BookOpen, FlaskConical, Code2, PenTool, Mail, User } from 'lucide-react';

export default function Navigation() {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Profile', href: '#profile', icon: User },
    { name: 'Academics', href: '#academics', icon: BookOpen },
    { name: 'Research', href: '#research', icon: FlaskConical },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Blog', href: '#blog', icon: PenTool },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav 
      className={`${styles.navContainer} ${isHovered ? styles.expanded : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.iconContainer}>
        <Menu size={24} />
      </div>
      <div className={styles.linksContainer}>
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className={styles.navLink} onClick={() => setIsHovered(false)}>
            <item.icon size={18} />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
