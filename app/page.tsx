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
      <Intro />
      <SelectedWork />
      <CaseStudyIntro />
      <CaseStudyWork />

      <div className="project-chapter project-chapter--imep">
        <ProjectTransition />
        <IMEPProject />
        <RoleSystem />
      </div>

      <Approach />
      <About />
      <Contact />
    </main>
  );
}
