import { SkillName } from "../components/Skill";

import CrimeMapper from "/Images/crimeMapper.png";

export type ProjectConfig = {
  name: string;
  description: string;
  image: string;
  skills: SkillName[];
  demoConfig: { isDemoEnabled: false } | { isDemoEnabled: true; link: string };
  viewCodeConfig: { isViewCodeEnabled: false } | { isViewCodeEnabled: true; link: string };
};

export const Projects: ProjectConfig[] = [
  {
    name: "Crime Mapper",
    description:
      "A web-based crime mapping, visualisation and analysis solution showcasing database integration and the use of a third party API",
    image: CrimeMapper,
    skills: ["JavaScript", "jQuery", "PHP", "MySQL", "HTML", "Bootstrap"],
    demoConfig: { isDemoEnabled: false },
    viewCodeConfig: { isViewCodeEnabled: true, link: "https://github.com/DanielPitfield/Crime_Mapper" },
  },
];
