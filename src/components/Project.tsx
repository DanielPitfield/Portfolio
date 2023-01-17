import styles from "../styles/Project.module.scss";

import { ProjectConfig } from "../data/projects";
import ProjectDemoButton from "./ProjectDemoButton";
import ProjectImage from "./ProjectImage";
import ProjectViewCodeButton from "./ProjectViewCodeButton";
import Skills from "./Skills";

interface ProjectProps {
  projectConfig: ProjectConfig;
}

// TODO: Carousel of images showing the project?
// TODO: Project variants (e.g old/new noughts and crosses, daily quotes contexts)
const Project = (props: ProjectProps) => {
  return (
    <article className={styles.wrapper} data-size={props.projectConfig.size}>
      <div className={styles.info}>
        <h3 className={styles.title}>{props.projectConfig.name}</h3>
        <Skills size="project" skills={props.projectConfig.skills} />
        <p className={styles.description}>{props.projectConfig.description}</p>

        <div className={styles.links}>
          <ProjectDemoButton demoConfig={props.projectConfig.demoConfig} />
          <ProjectViewCodeButton viewCodeConfig={props.projectConfig.viewCodeConfig} />
        </div>
      </div>
      <ProjectImage
        image={props.projectConfig.image}
        name={props.projectConfig.name}
        demoConfig={props.projectConfig.demoConfig}
      />
    </article>
  );
};

export default Project;
