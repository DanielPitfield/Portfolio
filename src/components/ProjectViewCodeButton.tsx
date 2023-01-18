import styles from "../styles/Project.module.scss";

import { BiCodeAlt } from "react-icons/bi";

interface ProjectViewCodeButtonProps {
  viewCodeConfig: { isViewCodeEnabled: false; reason?: string } | { isViewCodeEnabled: true; link: string };
}

const ProjectViewCodeButton = (props: ProjectViewCodeButtonProps) => {
  return (
    <a
      className={styles.link}
      data-is-disabled={!props.viewCodeConfig.isViewCodeEnabled}
      title={
        !props.viewCodeConfig.isViewCodeEnabled && props.viewCodeConfig.reason ? props.viewCodeConfig.reason : undefined
      }
      href={props.viewCodeConfig.isViewCodeEnabled ? props.viewCodeConfig.link : undefined}
      target="_blank"
      rel="noreferrer"
    >
      <BiCodeAlt className={styles.icon} /> View Code
    </a>
  );
};

export default ProjectViewCodeButton;
