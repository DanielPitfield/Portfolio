import styles from "../styles/Sidebar.module.scss";

import { IconType } from "react-icons/lib";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { BsFileEarmarkTextFill } from "react-icons/bs";

type SidebarItem = { name: string; link: string; icon: IconType };

const items: SidebarItem[] = [
  { name: "Email", link: "mailto:danielpitfield1@gmail.com", icon: MdEmail },
  { name: "GitHub", link: "https://github.com/DanielPitfield", icon: BsGithub },
  { name: "CV", link: "/assets/CV.pdf", icon: BsFileEarmarkTextFill },
];

const Sidebar = () => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <li key={item.name} className={styles.item}>
          <a className={styles.link} href={item.link} target="_blank" rel="noreferrer">
            <item.icon className={styles.icon} />
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
