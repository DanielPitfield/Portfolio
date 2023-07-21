import styles from "../styles/Project.module.scss";

import { ProjectConfig } from "../data/projects";
import { BiCodeAlt } from "react-icons/bi";

interface ProjectViewCodeButtonProps {
  viewCodeConfig: ProjectConfig["viewCodeConfig"];
}

const ProjectViewCodeButton = (props: ProjectViewCodeButtonProps) => {
  return (
    <a
      className={styles.link}
      href={props.viewCodeConfig.isViewCodeEnabled ? props.viewCodeConfig.link : undefined}
      title={!props.viewCodeConfig.isViewCodeEnabled ? props.viewCodeConfig.reason : undefined}
      target="_blank"
      rel="noreferrer"
      tabIndex={0}
      data-is-disabled={!props.viewCodeConfig.isViewCodeEnabled}
    >
      <BiCodeAlt className={styles.icon} /> View Code
    </a>
  );
};

export default ProjectViewCodeButton;
