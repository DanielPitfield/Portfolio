import styles from "../styles/Project.module.scss";

import { ProjectConfig } from "../data/projects";
import { FaPlay } from "react-icons/fa";

interface ProjectDemoButtonProps {
  demoConfig: ProjectConfig["demoConfig"];
}

const ProjectDemoButton = (props: ProjectDemoButtonProps) => {
  return (
    <a
      className={styles.link}
      href={props.demoConfig.isDemoEnabled ? props.demoConfig.link : undefined}
      title={!props.demoConfig.isDemoEnabled ? props.demoConfig.reason : undefined}
      target="_blank"
      rel="noreferrer"
      tabIndex={0}
      data-is-disabled={!props.demoConfig.isDemoEnabled}
    >
      <FaPlay className={styles.icon} /> Live Demo
    </a>
  );
};

export default ProjectDemoButton;
