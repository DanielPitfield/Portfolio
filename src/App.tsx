import HomeSection from "./components/HomeSection";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <div className="App">
      <HomeSection />
      <Skills size="section" skills={["TypeScript", "JavaScript", "React", "Next.js", "tRPC", "HTML", "SAAS", "CSS"]} />
      <ProjectsSection />
    </div>
  );
};

export default App;
