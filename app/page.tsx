import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import SelectedWork from "./components/SelectedWork";
import CaseStudyIntro from "./components/CaseStudyIntro";
import CaseStudyWork from "./components/CaseStudyWork";
import ProjectTransition from "./components/ProjectTransition";
import IMEPProject from "./components/IMEPProject";
import RoleSystem from "./components/RoleSystem";
import Approach from "./components/Approach";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <Hero />
      {/* 01	Introduction */}
      <Intro />
      {/* 02	Selected Work */}
      <SelectedWork />
      {/* 03	Case Study Intro */}
      <CaseStudyIntro />
      {/* 04	Project Details*/}
      <CaseStudyWork />

      <div className="project-chapter project-chapter--imep">
        {/* 05	Another Project */}
        <ProjectTransition />
        {/* 06	IMEP Project */}
        <IMEPProject />
        {/* 07	System & Roles */}
        <RoleSystem />
      </div>

      {/* 08	How I Work */}
      <Approach />
      {/* 09	About */}
      <About />
      {/* 10	Contact */}
      <Contact />
    </main>
  );
}
