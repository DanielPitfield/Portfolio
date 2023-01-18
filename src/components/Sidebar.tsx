import styles from "../styles/Sidebar.module.scss";

import { AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";
import { IconType } from "react-icons/lib";

type SidebarItem = { name: string; link: string; icon: IconType };

const items: SidebarItem[] = [
  { name: "Email", link: "mailto:danielpitfield1@gmail.com", icon: AiOutlineMail },
  { name: "GitHub", link: "https://github.com/DanielPitfield", icon: BsGithub },
  { name: "CV", link: "/assets/CV.pdf", icon: GrDocument  },
];

const Sidebar = () => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <li key={item.name} className={styles.item}>
          <item.icon className={styles.icon}/>
          <a className={styles.link} href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
