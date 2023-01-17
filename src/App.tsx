import HomeSection from "./components/HomeSection";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <>
      <HomeSection />
      <Skills size="section" skills={["TypeScript", "JavaScript", "React", "Next.js", "tRPC", "HTML", "SAAS", "CSS"]} />
      <ProjectsSection />
    </>
  );
};

export default App;
