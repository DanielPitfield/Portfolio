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
import Tailwind from "/Images/tailwind.svg";
import Bootstrap from "/Images/bootstrap.svg";
import CSS from "/Images/css.svg";

interface SkillProps {
  size: "small" | "large";
  skill: SkillName;
  showLabel: boolean;
}

const Skills = [
  { name: "TypeScript", icon: TypeScript, isDisplayed: true },
  { name: "JavaScript", icon: JavaScript, isDisplayed: true },
  { name: "jQuery", icon: jQuery, isDisplayed: false },
  { name: "React", icon: React, isDisplayed: true },
  { name: "Next.js", icon: NextJS, isDisplayed: true },
  { name: "tRPC", icon: tRPC, isDisplayed: true },
  { name: "PHP", icon: PHP, isDisplayed: false },
  { name: "MySQL", icon: MySQL, isDisplayed: false },
  { name: "HTML", icon: HTML, isDisplayed: true },
  { name: "SAAS", icon: SAAS, isDisplayed: true },
  { name: "Tailwind", icon: Tailwind, isDisplayed: false },
  { name: "Bootstrap", icon: Bootstrap, isDisplayed: false },
  { name: "CSS", icon: CSS, isDisplayed: true },
] as const;

const skillNames = Skills.map((skill) => skill.name);
export type SkillName = typeof skillNames[number];

// What are the names of the skills that are to be displayed in the 'Skills' section?
export const displayedSkills: SkillName[] = Skills.filter(skill => skill.isDisplayed).map(skill => skill.name);

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
