import styles from "./page.module.css";
import ParticlesBackground from "@/components/ParticlesBackground";
import BigDna from "@/components/BigDna";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Academics from "@/components/Academics";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import ResumeButton from "@/components/ResumeButton";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <BigDna />
      <main className={styles.main}>
        <Hero />
        <Profile />
        <Academics />
        <Research />
        <Skills />
        <Projects />
        <Blog />
        <ResumeButton />
        <ContactForm />
      </main>
    </>
  );
}
