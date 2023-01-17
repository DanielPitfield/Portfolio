import styles from "../styles/Skill.module.scss";

import TypeScript from "/Images/typescript.svg";
import JavaScript from "/Images/javascript.svg";
import jQuery from "/Images/jquery.svg";
import React from "/Images/react.svg";
import NextJS from "/Images/nextjs.svg";
import tRPC from "/Images/trpc.svg";
import PHP from "/Images/php.svg";
import MySQL from "/Images/mysql.svg";
import HTML from "/Images/html.svg";
import SAAS from "/Images/saas.svg";
import Bootstrap from "/Images/bootstrap.svg";
import CSS from "/Images/css.svg";

interface SkillProps {
  size: "small" | "large";
  skill: SkillName;
  showLabel: boolean;
}

// TODO: isDisplayed property? Some skills are used in projects but shouldn't be shown within Skills section
const Skills = [
  { name: "TypeScript", icon: TypeScript },
  { name: "JavaScript", icon: JavaScript },
  { name: "jQuery", icon: jQuery },
  { name: "React", icon: React },
  { name: "Next.js", icon: NextJS },
  { name: "tRPC", icon: tRPC },
  { name: "PHP", icon: PHP },
  { name: "MySQL", icon: MySQL },
  { name: "HTML", icon: HTML },
  { name: "SAAS", icon: SAAS },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "CSS", icon: CSS },
] as const;

const skillNames = Skills.map((skill) => skill.name);
export type SkillName = typeof skillNames[number];

const Skill = (props: SkillProps) => {
  const iconPath = Skills.find((skill) => skill.name === props.skill)?.icon;

  if (!iconPath) {
    return null;
  }

  // TODO: Centering icon
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
