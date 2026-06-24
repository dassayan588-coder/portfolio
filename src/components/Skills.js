"use client";

import styles from "@/app/page.module.css";
import { Dna, BrainCircuit, Activity, TestTube, Microscope, Binary } from "lucide-react";

const skills = [
  { name: "Machine Learning", icon: BrainCircuit, color: "#a855f7" },
  { name: "Molecular Biology", icon: Dna, color: "#3b82f6" },
  { name: "Real time qPCR", icon: Activity, color: "#ef4444" },
  { name: "Bioinformatics", icon: Binary, color: "#10b981" },
  { name: "Gel Electrophoresis", icon: TestTube, color: "#f59e0b" },
  { name: "Cancer Biology", icon: Microscope, color: "#ec4899" },
];

export default function Skills() {
  return (
    <div className={styles.section}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Expertise</h3>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className={styles.techIcon} title={skill.name}>
              <Icon size={28} color={skill.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
