import styles from "@/app/page.module.css";
import { FolderGit2, GitBranch, ExternalLink } from "lucide-react";

const mockProjects = [
  {
    title: "Gene Expression Predictor",
    description: "A machine learning model built with Python to predict gene expression patterns using deep neural networks.",
    tags: ["Python", "TensorFlow", "Bioinformatics"],
    github: "#",
    live: "#"
  },
  {
    title: "Molecular Docking Vis",
    description: "An interactive web visualization tool for molecular docking simulations using Three.js and React.",
    tags: ["React", "Three.js", "Biophysics"],
    github: "#",
    live: "#"
  },
  {
    title: "Cancer Cell Classifier",
    description: "Computer vision application that classifies cancer cells from microscopic imagery with high accuracy.",
    tags: ["OpenCV", "PyTorch", "Medical Imaging"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <div className={styles.section}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <FolderGit2 color="var(--color-accent)" /> Featured Projects
      </h3>
      
      <div className={styles.grid}>
        {mockProjects.map((project, idx) => (
          <div key={idx} className={styles.card} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                {project.title}
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ color: "#a1a1aa" }}><GitBranch size={18} /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" style={{ color: "#a1a1aa" }}><ExternalLink size={18} /></a>
                </div>
              </h4>
              <p>{project.description}</p>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} style={{ fontSize: "0.75rem", background: "rgba(115, 23, 207, 0.15)", color: "var(--color-accent)", padding: "2px 8px", borderRadius: "12px" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
