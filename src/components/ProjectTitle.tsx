import styles from "../styles/Project.module.scss";

import { ProjectConfig } from "../data/projects";

interface ProjectTitleProps {
  projectConfig: ProjectConfig;
  selectedVariant: ProjectConfig;
  setSelectedVariant: (selectedVariant: ProjectConfig) => void;
  additionalVariants: ProjectConfig[] | undefined;
}

const ProjectTitle = (props: ProjectTitleProps) => {
  if (!props.additionalVariants) {
    return <h3 className={styles.title}>{props.selectedVariant.name}</h3>;
  }

  return (
    <h3 className={styles.title}>
      <select
        className={styles.additionalVariantsDropdown}
        value={props.selectedVariant.name}
        onChange={(e) =>
          props.setSelectedVariant(
            props.additionalVariants?.find(
              (additionalVariant) => additionalVariant.name === e.target.selectedOptions[0].value
            ) ?? props.projectConfig
          )
        }
      >
        <option value={props.projectConfig.name}>{props.projectConfig.name}</option>
        {props.additionalVariants?.map((additionalVariant) => (
          <option key={additionalVariant.name} value={additionalVariant.name}>
            {additionalVariant.name}
          </option>
        ))}
      </select>
    </h3>
  );
};

export default ProjectTitle;