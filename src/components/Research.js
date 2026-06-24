import styles from "@/app/page.module.css";
import { Microscope, BookOpen, Presentation } from "lucide-react";

const workshops = [
  {
    title: "Basics of Molecular Biology",
    issuer: "Oriental Institute of Science and Technology (Vidyasagar University)",
    details: "Hands-on training in PCR, Agarose Gel Electrophoresis, DNA Isolation.",
  },
  {
    title: "Docking and Molecular Simulation",
    issuer: "Bioinformatics Workshop",
    details: "4-day extensive training on molecular docking simulations.",
  },
  {
    title: "Aquarium Fish Keeping and Fish Farming",
    issuer: "Kalna College & IQAC",
    details: "One-day State Level Workshop on aquaculture.",
  },
];

const seminars = [
  "Future Prospects in Ocean Science",
  "Horizons in Fisheries and Aqua Research",
  "National Level Seminar on Library Book Review",
];

export default function Research() {
  return (
    <div className={styles.section}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Microscope color="var(--color-accent)" /> Research & Workshops
      </h3>
      
      <div style={{ marginBottom: "2rem" }}>
        <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", color: "var(--color-success)" }}>
          <BookOpen size={18} /> Workshop Experience
        </h4>
        <div className={styles.grid}>
          {workshops.map((ws, idx) => (
            <div key={idx} className={styles.card}>
              <h4>{ws.title}</h4>
              <p>{ws.issuer}</p>
              <div className={styles.cardMeta}>{ws.details}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", color: "var(--color-success)" }}>
          <Presentation size={18} /> Seminar Experience
        </h4>
        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {seminars.map((seminar, idx) => (
            <li key={idx} style={{ padding: "1rem", background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-accent)" }} />
              {seminar}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
