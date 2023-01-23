import { SkillName } from "./skills";

import CrimeMapper from "/Images/Projects/crimeMapper.png";

export type ProjectConfig = {
  name: string;
  size: "small" | "large";
  status?: "In Development" | "Deprecated";
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
    description:
      "A game based on Wordle but with more content (22+ unique game modes), better replayability, configurable gamemode settings and a dedicated campaign!",
    image: "",
    skills: ["TypeScript", "React", "SASS"],
    demoConfig: { isDemoEnabled: true, link: "https://wingo-danielpitfield.vercel.app/" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Wingo" },
  },
  {
    name: "F1 Dashboard",
    size: "large",
    status: "In Development",
    description: "Website displaying F1 statistics, schedule and information",
    image: "",
    skills: ["TypeScript", "React", "Next.js", "tRPC", "SASS"],
    demoConfig: { isDemoEnabled: true, link: "https://f1-dashboard-danielpitfield.vercel.app/" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/F1-Dashboard" },
  },
  {
    name: "Gibbs Rules",
    size: "large",
    description: "Daily Gibbs rule, Ziva misquote and side character quote (from the TV show NCIS)",
    image: "",
    skills: ["TypeScript", "React", "Next.js", "SASS"],
    demoConfig: { isDemoEnabled: true, link: "https://gibbs-rules.vercel.app" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Gibbs-Rules" },
    additionalVariants: [
      {
        name: "F1 Quotes",
        size: "large",
        description: "Daily quotes from the people of F1",
        image: "",
        skills: ["TypeScript", "React", "Next.js", "SASS"],
        demoConfig: { isDemoEnabled: true, link: "https://gibbs-rules.vercel.app/?=F1" },
        viewCodeConfig: {
          isViewCodeEnabled: true,
          link: "https://github.com/DanielPitfield/Gibbs-Rules/blob/main/app/%5B%5B...quoteContext%5D%5D/page.tsx",
        },
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
    skills: ["TypeScript", "React", "CSS"],
    demoConfig: {
      isDemoEnabled: false,
      reason:
        "Clone the project and create a production build using the command:\nnpm run build\nNavigate to Chrome extensions and select the 'dist' output folder using the 'Load Unpacked' option",
    },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Becky-G-Duolingo" },
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
    demoConfig: { isDemoEnabled: true, link: "https://noughts-and-crosses-react.vercel.app/" },
    viewCodeConfig: {
      isViewCodeEnabled: true,
      link: "https://github.com/DanielPitfield/noughts-and-crosses-react",
    },
    additionalVariants: [
      {
        name: "Noughts and Crosses (old)",
        size: "small",
        status: "Deprecated",
        description:
          "Play against an AI opponent that evaluates moves using the Minimax algorithm or as two human players",
        image: "",
        skills: ["JavaScript", "jQuery", "HTML", "Bootstrap"],
        demoConfig: { isDemoEnabled: true, link: "https://danielpitfield.github.io/Noughts-and-Crosses/" },
        viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Noughts_and_Crosses" },
      },
    ],
  },
];
