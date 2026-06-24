"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { Download } from "lucide-react";

export default function ResumeButton() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate a terminal-like download experience
    setTimeout(() => {
      setDownloading(false);
      // In a real scenario, this would trigger a download link
      alert("Resume downloaded successfully!");
    }, 1500);
  };

  return (
    <div className={styles.section}>
      <button 
        className={styles.terminalBtn} 
        onClick={handleDownload}
        disabled={downloading}
      >
        <span className={styles.btnPrefix}>sayan@portfolio:~$</span>
        {downloading ? "downloading_resume.pdf..." : "./view_resume.sh"}
        <Download size={18} style={{ marginLeft: "8px", opacity: 0.8 }} />
      </button>
    </div>
  );
}
