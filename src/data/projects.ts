import { SkillName } from "../components/Skill";

import CrimeMapper from "/Images/crimeMapper.png";

export type ProjectConfig = {
  name: string;
  description: string;
  image: string;
  skills: SkillName[];
  demoConfig: { isDemoEnabled: false; reason?: string } | { isDemoEnabled: true; link: string };
  viewCodeConfig: { isViewCodeEnabled: false, reason?: string } | { isViewCodeEnabled: true; link: string };
};

export const Projects: ProjectConfig[] = [
  {
    name: "Wingo",
    description: "A game based on Wordle but with more content (numerous game modes) and better replayability",
    image: "",
    skills: ["TypeScript", "React", "SAAS"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: false },
  },
  {
    name: "F1 Dashboard",
    description: "",
    image: "",
    skills: ["TypeScript", "React", "Next.js", "tRPC", "SAAS"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: false },
  },
  // TODO: NCIS, F1 quote contexts
  // TODO: Brian Badonde variant
  {
    name: "Gibbs Rules",
    description: "",
    image: "",
    skills: ["TypeScript", "React", "Next.js", "SAAS"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: false },
  },
  {
    name: "Crime Mapper",
    description: "A web-based crime mapping, visualisation and analysis solution using the Google Maps JavaScript API",
    image: CrimeMapper,
    skills: ["JavaScript", "jQuery", "PHP", "MySQL", "HTML", "Bootstrap"],
    demoConfig: { isDemoEnabled: false, reason: "Hosting costs" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Crime_Mapper" },
  },
  // TODO: Project sizes? (the projects below are smaller in scope and shouldn't occupy the same screen space as larger projects)
  {
    name: "Becky G Duolingo",
    description: "Chrome extension to replace the cartoony images on Duolingo with Becky G!",
    image: "",
    skills: ["TypeScript", "JavaScript", "React", "CSS"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: false },
  },
  {
    name: "Advent of Code",
    description: "Solutions to Advent of Code 2022",
    image: "",
    skills: ["TypeScript"],
    demoConfig: { isDemoEnabled: false, reason: "Run with npm package runner (npx ts-node script.ts)" },
    viewCodeConfig: {
      isViewCodeEnabled: true,
      link: "https://github.com/DanielPitfield/advent-of-code-2022",
    },
  },
  // TODO: Older variant
  {
    name: "Noughts and Crosses",
    description: "Play against an AI opponent (which uses the unbeatable Minimax algortihm on the highest difficulty) or as two human players",
    image: "",
    skills: ["TypeScript", "React", "Tailwind"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: {
      isViewCodeEnabled: true,
      link: "https://github.com/DanielPitfield/noughts-and-crosses-react",
    },
  },
];
