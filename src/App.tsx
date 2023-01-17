import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="App">
      <Skills size="section" skills={["TypeScript", "JavaScript", "React", "Next.js", "tRPC", "HTML", "SAAS", "CSS"]} />
      <ProjectsSection />
    </div>
  );
};

export default App;
