import styles from './ContactCard.module.css';
import { Mail, Network, GitBranch } from 'lucide-react';

export default function ContactCard() {
  return (
    <div className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className={`card ${styles.contactCard}`}>
        <p className={styles.description}>
          I'm always open to discussing new research opportunities, machine learning projects, or simply exchanging ideas. Feel free to reach out to me directly!
        </p>
        <div className={styles.links}>
          <a href="mailto:dassayan588@gmail.com" className={styles.linkButton}>
            <Mail size={24} />
            <span>sayandas588@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/sayan-das141104?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <Network size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/dassayan588-coder" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <GitBranch size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
