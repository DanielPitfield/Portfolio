import styles from "../styles/ProjectsSection.module.scss";

import { Projects } from "../data/projects";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section>
      <h1 className={styles.title}>Projects</h1>

      <div>
        {Projects.map((project) => (
          <Project key={project.name} projectConfig={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
