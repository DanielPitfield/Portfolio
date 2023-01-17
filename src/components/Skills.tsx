import styles from "../styles/Skills.module.scss";

import Skill, { SkillName } from "./Skill";

interface SkillsProps {
  skills: SkillName[];
}

const Skills = (props: SkillsProps) => {
  return (
    <section>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.list}>
        {props.skills.map((skill) => (
          <Skill key={skill} skill={skill} showLabel />
        ))}
      </div>
    </section>
  );
};

export default Skills;
