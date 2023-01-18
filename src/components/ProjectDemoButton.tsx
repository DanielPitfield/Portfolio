import styles from "../styles/Project.module.scss";

import { FaPlay } from "react-icons/fa";

interface ProjectDemoButtonProps {
  demoConfig: { isDemoEnabled: false; reason?: string } | { isDemoEnabled: true; link: string };
}

const ProjectDemoButton = (props: ProjectDemoButtonProps) => {
  return (
    <a
      className={styles.link}
      tabIndex={0}
      data-is-disabled={!props.demoConfig.isDemoEnabled}
      title={!props.demoConfig.isDemoEnabled && props.demoConfig.reason ? props.demoConfig.reason : undefined}
      href={props.demoConfig.isDemoEnabled ? props.demoConfig.link : undefined}
      target="_blank"
      rel="noreferrer"
    >
      <FaPlay className={styles.icon} /> Live Demo
    </a>
  );
};

export default ProjectDemoButton;
