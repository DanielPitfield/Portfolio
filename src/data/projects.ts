import { SkillName } from "./skills";

// Project images
import Wingo from "/Images/Projects/wingo.png";
import F1Dashboard from "/Images/Projects/f1Dashboard.png";
import GibbsRules from "/Images/Projects/gibbsRules.png";
import F1Quotes from "/Images/Projects/f1Quotes.png";
import CrimeMapper from "/Images/Projects/crimeMapper.png";
import BeckyGDuolingo from "/Images/Projects/beckyGDuolingo.png";
import AdventOfCode from "/Images/Projects/adventOfCode.png";
import NoughtsAndCrossesNew from "/Images/Projects/noughtsAndCrossesNew.png";
import NoughtsAndCrossesOld from "/Images/Projects/noughtsAndCrossesOld.png";

export type ProjectConfig = {
  name: string;
  size: "small" | "large";
  status?: "In Development" | "Deprecated";
  description: string;
  image: string;
  skills: SkillName[];
  demoConfig: { isDemoEnabled: false; reason: string } | { isDemoEnabled: true; link: string };
  viewCodeConfig: { isViewCodeEnabled: false; reason: string } | { isViewCodeEnabled: true; link: string };
  additionalVariants?: ProjectConfig[];
};

export const Projects: ProjectConfig[] = [
  {
    name: "Wingo",
    size: "large",
    description:
      "A game based on Wordle but with more content (22+ unique game modes), better replayability, configurable gamemode settings and a dedicated campaign!",
    image: Wingo,
    skills: ["TypeScript", "React", "SASS"],
    demoConfig: { isDemoEnabled: true, link: "https://wingo-danielpitfield.vercel.app/" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Wingo" },
  },
  {
    name: "F1 Dashboard",
    size: "large",
    status: "In Development",
    description:
      "A website for everything Formula One including a countdown to the next Grand Prix weekend session and statistics for the current drivers, teams and more!",
    image: F1Dashboard,
    skills: ["TypeScript", "React", "Next.js", "tRPC", "SASS"],
    demoConfig: { isDemoEnabled: true, link: "https://f1-dashboard-danielpitfield.vercel.app/" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/F1-Dashboard" },
  },
  {
    name: "Gibbs Rules",
    size: "large",
    description:
      "Daily Gibbs rule, Ziva misquote and side character quote (from the TV show NCIS). Who said Gibbs' rules aren't written down anywhere?",
    image: GibbsRules,
    skills: ["TypeScript", "React", "Next.js", "SASS"],
    demoConfig: { isDemoEnabled: true, link: "https://gibbs-rules.vercel.app" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Gibbs-Rules" },
    additionalVariants: [
      {
        name: "F1 Quotes",
        size: "large",
        description:
          "Daily quotes from the people of Formula One including Martin Brundle grid walk drama, iconic Crofty commentary and the legendary late Murray Walker!",
        image: F1Quotes,
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
    skills: ["JavaScript", "jQuery", "Google Cloud", "PHP", "MySQL", "Bootstrap"],
    demoConfig: { isDemoEnabled: false, reason: "Hosting costs" },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Crime_Mapper" },
  },
  {
    name: "Becky G Duolingo",
    size: "small",
    description: "Chrome extension to replace the images on Duolingo with Becky G! ¿Quieres aprender español con ella?",
    image: BeckyGDuolingo,
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
    description: "Solutions to an advent calendar of programming puzzles! Top 3% time for Day 2, Day 6 and Day 10!",
    image: AdventOfCode,
    skills: ["TypeScript", "npm"],
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
      "Play against an AI opponent (which uses the unbeatable Minimax algorithm on the highest difficulty) or as two human players!",
    image: NoughtsAndCrossesNew,
    skills: ["TypeScript", "React", "Tailwind"],
    demoConfig: { isDemoEnabled: true, link: "https://noughts-and-crosses-react.vercel.app/" },
    viewCodeConfig: {
      isViewCodeEnabled: true,
      link: "https://github.com/DanielPitfield/noughts-and-crosses-react",
    },
    additionalVariants: [
      {
        name: "Older version",
        size: "small",
        status: "Deprecated",
        description:
          "Play against an AI opponent that evaluates moves using the unbeatable Minimax algorithm or as two human players!",
        image: NoughtsAndCrossesOld,
        skills: ["JavaScript", "jQuery", "HTML", "Bootstrap"],
        demoConfig: { isDemoEnabled: true, link: "https://danielpitfield.github.io/Noughts-and-Crosses/" },
        viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Noughts_and_Crosses" },
      },
    ],
  },
];
