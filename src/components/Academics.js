import styles from "@/app/page.module.css";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.Sc. in Zoology (Second Semester Ongoing)",
    institution: "RamaKrishna Mission Vivekananda Centenary College",
    date: "2025 - 2027",
    details: "M.Sc. 1st Semester Result: 8.40 CGPA",
  },
  {
    degree: "B.Sc. Honours in Zoology",
    institution: "Kalna College, The University of Burdwan",
    date: "2022 - 2025",
    details: "CGPA: 7.50",
  },
  {
    degree: "Higher Secondary Examination (WBCHSE)",
    institution: "K.A.M.M. High School",
    date: "2022",
    details: "Percentage: 91.60%",
  },
  {
    degree: "Secondary Examination (WBBSE)",
    institution: "K.A.M.M. High School",
    date: "2020",
    details: "Percentage: 87.57%",
  },
];

export default function Academics() {
  return (
    <div className={styles.section}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <GraduationCap color="var(--color-accent)" /> Academics
      </h3>
      <div className={styles.timeline}>
        {education.map((edu, idx) => (
          <div key={idx} className={styles.timelineItem}>
            <div className={styles.timelineDot} />
            <div className={styles.timelineContent}>
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
              <span className={styles.timelineDate}>{edu.date}</span>
              <p style={{ marginTop: "0.5rem", color: "var(--color-text)" }}>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
