import { SkillName } from "./skills";

// Project images
import Wingo from "/Images/Projects/wingo.png";
import F1Dashboard from "/Images/Projects/f1Dashboard.png";
import AliceInBorderlandDashboard from "/Images/Projects/aliceInBorderlandDashboard.png";
import GibbsRules from "/Images/Projects/gibbsRules.png";
import F1Quotes from "/Images/Projects/f1Quotes.png";
import CrimeMapper from "/Images/Projects/crimeMapper.png";
import FoodieFastlane from "/Images/Projects/foodieFastlane.png";
import BeckyGDuolingo from "/Images/Projects/beckyGDuolingo.png";
import TierList from "/Images/Projects/tierList.png";
import AdventOfCode from "/Images/Projects/adventOfCode.png";

export type ProjectConfig = {
  name: string;
  size: "small" | "large";
  status?: "In Development" | "Deprecated";
  description: string;
  image: string;
  skills: SkillName[];
  demoConfig: { isDemoEnabled: false; reason: string } | { isDemoEnabled: true; link: URL };
  viewCodeConfig: { isViewCodeEnabled: false; reason: string } | { isViewCodeEnabled: true; link: URL };
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
    demoConfig: { isDemoEnabled: true, link: new URL("https://wingo-danielpitfield.vercel.app") },
    viewCodeConfig: { isViewCodeEnabled: true, link: new URL("https://github.com/DanielPitfield/Wingo") },
  },
  {
    name: "AiB Dashboard",
    size: "large",
    description:
      "A website for everything Alice in Borderland (the TV show) including profile pages for all the main characters and all the card games!",
    image: AliceInBorderlandDashboard,
    skills: ["TypeScript", "React", "Next.js", "tRPC", "SASS"],
    demoConfig: { isDemoEnabled: true, link: new URL("https://alice-in-borderland.vercel.app") },
    viewCodeConfig: { isViewCodeEnabled: true, link: new URL("https://github.com/DanielPitfield/Alice-in-Borderland") },
    additionalVariants: [
      {
        name: "F1 Dashboard",
        size: "large",
        status: "In Development",
        description:
          "A website for everything Formula One including a countdown to the next Grand Prix weekend session and statistics for the current drivers, teams and more!",
        image: F1Dashboard,
        skills: ["TypeScript", "React", "Next.js", "tRPC", "SASS"],
        demoConfig: { isDemoEnabled: true, link: new URL("https://f1-dashboard-danielpitfield.vercel.app") },
        viewCodeConfig: { isViewCodeEnabled: true, link: new URL("https://github.com/DanielPitfield/F1-Dashboard") },
      },
    ],
  },
  {
    name: "Gibbs Rules",
    size: "large",
    description:
      "Daily Gibbs rule, Ziva misquote and side character quote (from the TV show NCIS). Who said Gibbs' rules aren't written down anywhere?",
    image: GibbsRules,
    skills: ["TypeScript", "React", "Next.js", "SASS"],
    demoConfig: { isDemoEnabled: true, link: new URL("https://gibbs-rules.vercel.app") },
    viewCodeConfig: { isViewCodeEnabled: true, link: new URL("https://github.com/DanielPitfield/Gibbs-Rules") },
    additionalVariants: [
      {
        name: "F1 Quotes",
        size: "large",
        description:
          "Daily quotes from the people of Formula One including Martin Brundle grid walk drama, iconic Crofty commentary and the legendary late Murray Walker!",
        image: F1Quotes,
        skills: ["TypeScript", "React", "Next.js", "SASS"],
        demoConfig: { isDemoEnabled: true, link: new URL("https://gibbs-rules.vercel.app/?=F1") },
        viewCodeConfig: {
          isViewCodeEnabled: true,
          link: new URL("https://github.com/DanielPitfield/Gibbs-Rules/blob/main/app/%5B%5B...quoteContext%5D%5D/page.tsx"),
        },
      },
    ],
  },
  {
    name: "Crime Mapper",
    size: "large",
    description: "A web-based crime mapping, visualisation and analysis solution using the Google Maps JavaScript API",
    image: CrimeMapper,
    // The project also uses jQuery and HTML, but show fewer technologies to prevent wrapping onto new line
    skills: ["JavaScript", "Google Cloud", "PHP", "MySQL", "Bootstrap"],
    demoConfig: { isDemoEnabled: false, reason: "Hosting costs" },
    viewCodeConfig: { isViewCodeEnabled: true, link: new URL("https://github.com/DanielPitfield/Crime_Mapper") },
  },
  {
    name: "Foodie Fastlane",
    size: "small",
    status: "In Development",
    description: "Chrome extension to automatically remember and place orders for your favourite online takeaways!",
    image: FoodieFastlane,
    skills: ["TypeScript", "React", "CSS"],
    demoConfig: { isDemoEnabled: false, reason: "Not published on Chrome Web Store" },
    viewCodeConfig: {
      isViewCodeEnabled: true,
      link: new URL("https://github.com/DanielPitfield/Foodie-Fastlane"),
    },
  },
  {
    name: "Becky G Duolingo",
    size: "small",
    description: "Chrome extension to replace the images on Duolingo with Becky G! ¿Quieres aprender español con ella?",
    image: BeckyGDuolingo,
    skills: ["TypeScript", "React", "CSS"],
    demoConfig: {
      isDemoEnabled: true,
      link: new URL("https://chrome.google.com/webstore/detail/becky-g-duolingo/fmgiakeojakaokcmkcigkafikjjbafld"),
    },
    viewCodeConfig: { isViewCodeEnabled: true, link: new URL("https://github.com/DanielPitfield/Becky-G-Duolingo") },
    additionalVariants: [
      {
        name: "Juicer Tier List",
        size: "small",
        description: "Rank items (Juicers, F1 Drivers and more) in tiers from best to worst! How could you not put Becky G in S tier?",
        image: TierList,
        skills: ["TypeScript", "React", "Next.js", "SASS"],
        demoConfig: {
          isDemoEnabled: true,
          link: new URL("https://juicer-tier-list.vercel.app"),
        },
        viewCodeConfig: {
          isViewCodeEnabled: true,
          link: new URL("https://github.com/DanielPitfield/Tier-List"),
        },
      },
    ],
  },
  {
    name: "Advent of Code",
    size: "small",
    description: "Solutions to an advent calendar of programming puzzles! Top 3% time for Day 2, Day 6 and Day 10!",
    image: AdventOfCode,
    skills: ["TypeScript", "Node.js"],
    demoConfig: {
      isDemoEnabled: false,
      reason: "Run a solution file with ts-node and the npm package runner using the command:\nnpx ts-node script.ts",
    },
    viewCodeConfig: {
      isViewCodeEnabled: true,
      link: new URL("https://github.com/DanielPitfield/advent-of-code-2022"),
    },
  },
];
