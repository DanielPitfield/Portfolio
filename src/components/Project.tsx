import styles from "../styles/Project.module.scss";

import { ProjectConfig } from "../data/projects";
import ProjectDemoButton from "./ProjectDemoButton";
import ProjectImage from "./ProjectImage";
import ProjectViewCodeButton from "./ProjectViewCodeButton";
import Skills from "./Skills";

interface ProjectProps {
  projectConfig: ProjectConfig;
}

const Project = (props: ProjectProps) => {
  return (
    <article className={styles.wrapper}>
      <ProjectImage
        image={props.projectConfig.image}
        name={props.projectConfig.name}
        demoConfig={props.projectConfig.demoConfig}
      />

      <h3 className={styles.title}>{props.projectConfig.name}</h3>
      <Skills size="project" skills={props.projectConfig.skills} />
      <p className={styles.description}>{props.projectConfig.description}</p>

      <div className={styles.links}>
        <ProjectDemoButton demoConfig={props.projectConfig.demoConfig} />
        <ProjectViewCodeButton viewCodeConfig={props.projectConfig.viewCodeConfig} />
      </div>
    </article>
  );
};

export default Project;
