import { ProjectConfig } from "../data/projects";
import styles from "../styles/Project.module.scss";
import ProjectDemoButton from "./ProjectDemoButton";
import ProjectImage from "./ProjectImage";
import ProjectViewCodeButton from "./ProjectViewCodeButton";
import SkillsSection from "./SkillsSection";

interface ProjectProps {
  projectConfig: ProjectConfig;
}

const Project = (props: ProjectProps) => {
  return (
    <article className={styles.wrapper}>
      <ProjectImage
        imagePath={props.projectConfig.imagePath}
        name={props.projectConfig.name}
        demoConfig={props.projectConfig.demoConfig}
      />

      <h3>{props.projectConfig.name}</h3>
      <SkillsSection skills={props.projectConfig.skills} />
      <p>{props.projectConfig.description}</p>

      <ProjectDemoButton demoConfig={props.projectConfig.demoConfig} />
      <ProjectViewCodeButton viewCodeConfig={props.projectConfig.viewCodeConfig} />
    </article>
  );
};

export default Project;
