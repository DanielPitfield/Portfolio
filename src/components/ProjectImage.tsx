import styles from "../styles/Project.module.scss";

interface ProjectImageProps {
  image: string;
  name: string;
  demoConfig: { isDemoEnabled: false } | { isDemoEnabled: true; link: string };
  viewCodeConfig: { isViewCodeEnabled: false; reason?: string } | { isViewCodeEnabled: true; link: string };
}

const ProjectImage = (props: ProjectImageProps) => {
  // What URL should be linked to?
  function getLink(): string | undefined {
    // Live Demo link as first priority
    if (props.demoConfig.isDemoEnabled) {
      return props.demoConfig.link;
    }

    if (props.viewCodeConfig.isViewCodeEnabled) {
      return props.viewCodeConfig.link;
    }

    return undefined;
  }

  return (
    <div className={styles.imageWrapper}>
      <a className={styles.imageLink} tabIndex={-1} href={getLink()} target="_blank" rel="noreferrer">
        <img className={styles.image} src={props.image} alt={props.name} />
      </a>
    </div>
  );
};

export default ProjectImage;
