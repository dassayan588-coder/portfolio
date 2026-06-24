import styles from "@/app/page.module.css";
import { BookText, Calendar, Clock } from "lucide-react";

const mockPosts = [
  {
    title: "The Intersection of Machine Learning and Genetics",
    excerpt: "Exploring how deep neural networks are uncovering hidden patterns in human DNA and revolutionizing personalized medicine.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "A Guide to Molecular Docking Simulation",
    excerpt: "Breaking down the steps to perform a successful molecular docking simulation for identifying potential drug targets.",
    date: "Sep 28, 2025",
    readTime: "8 min read",
    link: "#"
  },
  {
    title: "Ethology in the Age of AI",
    excerpt: "How computer vision is helping researchers track and analyze animal behavior in the wild without human interference.",
    date: "Aug 15, 2025",
    readTime: "6 min read",
    link: "#"
  }
];

export default function Blog() {
  return (
    <div className={styles.section}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <BookText color="var(--color-accent)" /> Latest from the Blog
      </h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {mockPosts.map((post, idx) => (
          <a key={idx} href={post.link} className={styles.card} style={{ display: "block", textDecoration: "none" }}>
            <h4 style={{ color: "var(--color-text)", fontSize: "1.25rem", marginBottom: "0.5rem" }}>{post.title}</h4>
            <p style={{ color: "#a1a1aa", marginBottom: "1rem" }}>{post.excerpt}</p>
            <div className={styles.cardMeta}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}><Calendar size={14} /> {post.date}</span>
              <span>•</span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}><Clock size={14} /> {post.readTime}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
