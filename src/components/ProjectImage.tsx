import styles from "../styles/Project.module.scss";

interface ProjectImageProps {
  imagePath: string;
  name: string;
  demoConfig: { isDemoEnabled: false } | { isDemoEnabled: true; link: string };
}

const ProjectImage = (props: ProjectImageProps) => {
  return (
    <a href={props.demoConfig.isDemoEnabled ? props.demoConfig.link : undefined} target="_blank" rel="noreferrer">
      <img src={props.imagePath} alt={props.name} />
    </a>
  );
};

export default ProjectImage;
