import styles from "../styles/Project.module.scss";

import { FaPlay } from "react-icons/fa";

interface ProjectDemoButtonProps {
  demoConfig: { isDemoEnabled: false } | { isDemoEnabled: true; link: string };
}

const ProjectDemoButton = (props: ProjectDemoButtonProps) => {
  return (
    <a
      className={styles.link}
      data-status={props.demoConfig.isDemoEnabled}
      href={props.demoConfig.isDemoEnabled ? props.demoConfig.link : undefined}
      target="_blank"
      rel="noreferrer"
    >
      <FaPlay />Live Demo
    </a>
  );
};

export default ProjectDemoButton;
