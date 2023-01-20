import { SkillName } from "./skills";

import CrimeMapper from "/Images/Projects/crimeMapper.png";

export type ProjectConfig = {
  name: string;
  size: "small" | "large";
  description: string;
  image: string;
  skills: SkillName[];
  demoConfig: { isDemoEnabled: false; reason?: string } | { isDemoEnabled: true; link: string };
  viewCodeConfig: { isViewCodeEnabled: false; reason?: string } | { isViewCodeEnabled: true; link: string };
  additionalVariants?: ProjectConfig[];
};

export const Projects: ProjectConfig[] = [
  {
    name: "Wingo",
    size: "large",
    description: "A game based on Wordle but with more content (numerous game modes) and better replayability",
    image: "",
    skills: ["TypeScript", "React", "SAAS"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: false },
  },
  {
    name: "F1 Dashboard",
    size: "large",
    description: "",
    image: "",
    skills: ["TypeScript", "React", "Next.js", "tRPC", "SAAS"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: false },
  },
  {
    name: "Gibbs Rules",
    size: "large",
    description: "",
    image: "",
    skills: ["TypeScript", "React", "Next.js", "SAAS"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: false },
    additionalVariants: [
      {
        name: "F1 Quotes",
        size: "large",
        description: "",
        image: "",
        skills: ["TypeScript", "React", "Next.js", "SAAS"],
        demoConfig: { isDemoEnabled: false },
        viewCodeConfig: { isViewCodeEnabled: false },
      },
    ],
  },
  {
    name: "Crime Mapper",
    size: "large",
    description: "A web-based crime mapping, visualisation and analysis solution using the Google Maps JavaScript API",
    image: CrimeMapper,
    skills: ["JavaScript", "jQuery", "Google Cloud", "PHP", "MySQL", "HTML", "Bootstrap"],
    demoConfig: { isDemoEnabled: false, reason: "Hosting costs" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Crime_Mapper" },
  },
  {
    name: "Becky G Duolingo",
    size: "small",
    description: "Chrome extension to replace the cartoony images on Duolingo with Becky G!",
    image: "",
    skills: ["TypeScript", "JavaScript", "React", "CSS"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: false },
  },
  {
    name: "Advent of Code",
    size: "small",
    description: "Solutions to Advent of Code 2022 (an advent calendar of programming puzzles)",
    image: "",
    skills: ["TypeScript"],
    demoConfig: {
      isDemoEnabled: false,
      reason: "Run a solution file with ts-node and the npm package runner using the command:\nnpx ts-node script.ts",
    },
    viewCodeConfig: {
      isViewCodeEnabled: true,
      link: "https://github.com/DanielPitfield/advent-of-code-2022",
    },
  },
  {
    name: "Noughts and Crosses",
    size: "small",
    description:
      "Play against an AI opponent (which uses the unbeatable Minimax algorithm on the highest difficulty) or as two human players",
    image: "",
    skills: ["TypeScript", "React", "Tailwind"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: {
      isViewCodeEnabled: true,
      link: "https://github.com/DanielPitfield/noughts-and-crosses-react",
    },
    additionalVariants: [
      {
        name: "Noughts and Crosses (old)",
        size: "small",
        description:
          "Play against an AI opponent that evaluates moves using the Minimax algorithm or as two human players",
        image: "",
        skills: ["JavaScript", "jQuery", "HTML", "Bootstrap"],
        demoConfig: { isDemoEnabled: false },
        viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Noughts_and_Crosses" },
      },
    ],
  },
];
