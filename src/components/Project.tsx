import styles from "../styles/Project.module.scss";

import { ProjectConfig } from "../data/projects";
import ProjectDemoButton from "./ProjectDemoButton";
import ProjectImage from "./ProjectImage";
import ProjectViewCodeButton from "./ProjectViewCodeButton";
import Skills from "./Skills";
import { useState } from "react";

interface ProjectProps {
  projectConfig: ProjectConfig;
}

// TODO: Carousel of images showing the project?
// TODO: Project variants (e.g old/new noughts and crosses, daily quotes contexts)
const Project = (props: ProjectProps) => {
  const [selectedVariant, setSelectedVariant] = useState<ProjectConfig>(props.projectConfig);

  return (
    <article className={styles.wrapper} data-size={props.projectConfig.size}>
      <div className={styles.info}>
        <h3 className={styles.title}>
          {(props.projectConfig.additionalVariants?.length ?? 0) > 0 ? (
            <select
              className={styles.additionalVariantsDropdown}
              value={selectedVariant.name}
              onChange={(e) =>
                setSelectedVariant(
                  props.projectConfig.additionalVariants?.find((additionalVariant) => additionalVariant.name === e.target.selectedOptions[0].value) ||
                    props.projectConfig
                )
              }
            >
            <option value={props.projectConfig.name}>
              {props.projectConfig.name}
            </option>
              {props.projectConfig.additionalVariants?.map((additionalVariant) => (
                <option key={additionalVariant.name} value={additionalVariant.name}>
                  {additionalVariant.name}
                </option>
              ))}
            </select>
          ) : (
            selectedVariant.name
          )}
        </h3>
        <Skills size="project" skills={selectedVariant.skills} />
        <p className={styles.description}>{selectedVariant.description}</p>

        <div className={styles.links}>
          <ProjectDemoButton demoConfig={selectedVariant.demoConfig} />
          <ProjectViewCodeButton viewCodeConfig={selectedVariant.viewCodeConfig} />
        </div>
      </div>
      <ProjectImage image={selectedVariant.image} name={selectedVariant.name} demoConfig={selectedVariant.demoConfig} />
    </article>
  );
};

export default Project;
