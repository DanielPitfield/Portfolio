import styles from "../styles/HomeSection.module.scss";
import Sidebar from "./Sidebar";

const HomeSection = () => {
  return (
    <section className={styles.wrapper} id="home">
      <h1 className={styles.title}>Daniel Pitfield</h1>
      <h2 className={styles.subTitle}>Web Developer</h2>
      <a className={styles.link} href="#projects">
        Browse Projects
      </a>
      <Sidebar />
    </section>
  );
};

export default HomeSection;
