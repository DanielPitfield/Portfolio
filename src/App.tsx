import HomeSection from "./components/HomeSection";
import Skills from "./components/Skills";
import { displayedSkills } from "./data/skills";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <>
      <HomeSection />
      <Skills size="section" skills={displayedSkills} />
      <ProjectsSection />
    </>
  );
};

export default App;
