import styles from "../styles/Project.module.scss";

import { BiCodeAlt } from "react-icons/bi";

interface ProjectViewCodeButtonProps {
  viewCodeConfig: { isViewCodeEnabled: false } | { isViewCodeEnabled: true; link: string };
}

const ProjectViewCodeButton = (props: ProjectViewCodeButtonProps) => {
  return (
    <a
      className={styles.link}
      data-status={props.viewCodeConfig.isViewCodeEnabled}
      href={props.viewCodeConfig.isViewCodeEnabled ? props.viewCodeConfig.link : undefined}
      target="_blank"
      rel="noreferrer"
    >
      <BiCodeAlt /> View Code
    </a>
  );
};

export default ProjectViewCodeButton;
