import TypeScript from "/Images/Skills/typescript.svg";
import JavaScript from "/Images/Skills/javascript.svg";
import jQuery from "/Images/Skills/jquery.svg";
import React from "/Images/Skills/react.svg";
import NextJS from "/Images/Skills/nextjs.svg";
import tRPC from "/Images/Skills/trpc.svg";
import PHP from "/Images/Skills/php.svg";
import MySQL from "/Images/Skills/mysql.svg";
import HTML from "/Images/Skills/html.svg";
import SASS from "/Images/Skills/sass.svg";
import Tailwind from "/Images/Skills/tailwind.svg";
import Bootstrap from "/Images/Skills/bootstrap.svg";
import CSS from "/Images/Skills/css.svg";
import npm from "/Images/Skills/npm.svg";
import Git from "/Images/Skills/git.svg";
import GoogleCloud from "/Images/Skills/googlecloud.svg";
import VSCode from "/Images/Skills/vscode.svg";

export type SkillName = typeof skillNames[number];

export const SkillMappings = [
  { name: "TypeScript", icon: TypeScript, isDisplayed: true },
  { name: "JavaScript", icon: JavaScript, isDisplayed: true },
  { name: "jQuery", icon: jQuery, isDisplayed: false },
  { name: "React", icon: React, isDisplayed: true },
  { name: "Next.js", icon: NextJS, isDisplayed: true },
  { name: "tRPC", icon: tRPC, isDisplayed: false },
  { name: "PHP", icon: PHP, isDisplayed: false },
  { name: "MySQL", icon: MySQL, isDisplayed: false },
  { name: "HTML", icon: HTML, isDisplayed: true },
  { name: "SASS", icon: SASS, isDisplayed: true },
  { name: "Tailwind", icon: Tailwind, isDisplayed: false },
  { name: "Bootstrap", icon: Bootstrap, isDisplayed: false },
  { name: "CSS", icon: CSS, isDisplayed: true },
  { name: "npm", icon: npm, isDisplayed: true },
  { name: "Git", icon: Git, isDisplayed: true },
  { name: "Google Cloud", icon: GoogleCloud, isDisplayed: false },
  { name: "Visual Studio Code", icon: VSCode, isDisplayed: true },
] as const;

const skillNames = SkillMappings.map((skill) => skill.name);

// What are the names of the skills that are to be displayed in the 'Skills' section?
export const displayedSkills: SkillName[] = SkillMappings.filter((skill) => skill.isDisplayed).map((skill) => skill.name);
