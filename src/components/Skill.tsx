import styles from "../styles/Skill.module.scss";

import TypeScript from "/Images/typescript.svg";
import JavaScript from "/Images/javascript.svg";
import React from "/Images/react.svg";
import NextJS from "/Images/nextjs.svg";
import tRPC from "/Images/trpc.svg";
import HTML from "/Images/html.svg";
import SAAS from "/Images/saas.svg";
import CSS from "/Images/css.svg";

interface SkillProps {
  skill: SkillName;
  showLabel: boolean;
}

const Skills = [
  { name: "TypeScript", icon: TypeScript },
  { name: "JavaScript", icon: JavaScript },
  { name: "React", icon: React },
  { name: "Next.js", icon: NextJS },
  { name: "tRPC", icon: tRPC },
  { name: "HTML", icon: HTML },
  { name: "SAAS", icon: SAAS },
  { name: "CSS", icon: CSS },
] as const;

const skillNames = Skills.map((skill) => skill.name);
export type SkillName = typeof skillNames[number];

const Skill = (props: SkillProps) => {
  const iconPath = Skills.find((skill) => skill.name === props.skill)?.icon;

  if (!iconPath) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={iconPath} alt={props.skill}></img>
      {props.showLabel && <div className={styles.label}>{props.skill}</div>}
    </div>
  );
};

export default Skill;
