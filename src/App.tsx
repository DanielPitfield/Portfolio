import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <div className="App">
      <SkillsSection skills={["TypeScript", "JavaScript", "React", "Next.js", "tRPC", "HTML", "SAAS", "CSS"]} />
      <ProjectsSection />
    </div>
  );
};

export default App;
