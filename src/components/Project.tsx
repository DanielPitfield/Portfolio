import styles from "../styles/Project.module.scss";

import { useState } from "react";
import { ProjectConfig } from "../data/projects";
import ProjectTitle from "./ProjectTitle";
import Skills from "./Skills";
import ProjectDemoButton from "./ProjectDemoButton";
import ProjectViewCodeButton from "./ProjectViewCodeButton";
import ProjectImage from "./ProjectImage";

interface ProjectProps {
  projectConfig: ProjectConfig;
}

// TODO: Carousel of images showing the project?
const Project = (props: ProjectProps) => {
  const [selectedVariant, setSelectedVariant] = useState<ProjectConfig>(props.projectConfig);

  return (
    <article className={styles.wrapper} data-size={props.projectConfig.size}>
      <div className={styles.info}>
        <ProjectTitle
          projectConfig={props.projectConfig}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          additionalVariants={props.projectConfig.additionalVariants}
        />

        <Skills size="project" skills={selectedVariant.skills} />
        <p className={styles.description}>{selectedVariant.description}</p>

        <div className={styles.links}>
          <ProjectDemoButton demoConfig={selectedVariant.demoConfig} />
          <ProjectViewCodeButton viewCodeConfig={selectedVariant.viewCodeConfig} />
        </div>
      </div>

      <ProjectImage
        image={selectedVariant.image}
        name={selectedVariant.name}
        demoConfig={selectedVariant.demoConfig}
        viewCodeConfig={selectedVariant.viewCodeConfig}
      />
    </article>
  );
};

export default Project;
