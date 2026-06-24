import styles from "@/app/page.module.css";
import { User } from "lucide-react";

export default function Profile() {
  return (
    <div className={`${styles.section} ${styles.glassPanel}`} style={{ padding: "2rem", borderRadius: "16px", background: "var(--color-card-bg)", border: "1px solid rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
      <div className={styles.profileCard}>
        <div style={{ position: "relative" }}>
          <img 
            src="/profile.jpg" 
            alt="Sayan Das" 
            className={styles.avatar} 
            style={{ display: "block", background: "#1a1a2e", objectFit: "cover" }} 
          />
        </div>
        <div>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "0.5rem" }}>Sayan Das</h2>
          <p style={{ color: "#a1a1aa", fontSize: "1.1rem" }}>
            M.Sc. Zoology @ RamaKrishna Mission Vivekananda Centenary College.
            <br />
            Passionate about Cell Biology & Cancer Research.
          </p>
        </div>
      </div>
    </div>
  );
}
