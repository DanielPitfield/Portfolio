import styles from "../styles/Project.module.scss";

interface ProjectImageProps {
  image: string;
  name: string;
  demoConfig: { isDemoEnabled: false } | { isDemoEnabled: true; link: string };
}

const ProjectImage = (props: ProjectImageProps) => {
  return (
    <a href={props.demoConfig.isDemoEnabled ? props.demoConfig.link : undefined} target="_blank" rel="noreferrer">
      <img src={props.image} alt={props.name} />
    </a>
  );
};

export default ProjectImage;
