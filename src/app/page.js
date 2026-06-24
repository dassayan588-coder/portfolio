import styles from "./page.module.css";
import WebGLBackground from "@/components/WebGLBackground";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Academics from "@/components/Academics";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import ResumeButton from "@/components/ResumeButton";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Navigation />
      <WebGLBackground />
      <main className={styles.main}>
        <section id="home"><Hero /></section>
        <section id="profile"><Profile /></section>
        <section id="academics"><Academics /></section>
        <section id="research"><Research /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="blog"><Blog /></section>
        <ResumeButton />
        <section id="contact"><ContactCard /></section>
      </main>
    </>
  );
}
