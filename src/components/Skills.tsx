import styles from "../styles/SkillsSection.module.scss";

import Skill, { SkillName } from "./Skill";

interface SkillsProps {
  size: "section" | "project";
  skills: SkillName[];
}

const Skills = (props: SkillsProps) => {
  // Display the provided skills with labels (as a section)
  if (props.size === "section") {
    return (
      <section className={styles.wrapper} id="skills">
        <h1 className={styles.title}>Skills</h1>

        <div className={styles.list}>
          {props.skills.map((skill) => (
            <Skill key={skill} size="large" skill={skill} showLabel />
          ))}
        </div>
      </section>
    );
  }

  // Display the provided skills with smaller icons and without labels
  return (
    <div className={styles.list}>
      {props.skills.map((skill) => (
        <Skill key={skill} size="small" skill={skill} showLabel={false} />
      ))}
    </div>
  );
};

export default Skills;
