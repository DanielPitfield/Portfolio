import styles from "../styles/Skill.module.scss";

import { SkillName, SkillMappings } from "../data/skills";

interface SkillProps {
  size: "small" | "large";
  skill: SkillName;
  showLabel: boolean;
}

const Skill = (props: SkillProps) => {
  const iconPath = SkillMappings.find((skill) => skill.name === props.skill)?.icon;

  if (!iconPath) {
    return null;
  }

  return (
    <div className={styles.wrapper} data-size={props.size}>
      <img
        className={styles.icon}
        data-size={props.size}
        src={iconPath}
        alt={props.skill}
        title={!props.showLabel ? props.skill : undefined}
      ></img>
      {props.showLabel && <div className={styles.label}>{props.skill}</div>}
    </div>
  );
};

export default Skill;
