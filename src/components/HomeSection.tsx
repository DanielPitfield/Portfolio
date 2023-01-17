import styles from "../styles/HomeSection.module.scss";

const HomeSection = () => {
  return (
    <section className={styles.wrapper} id="home">
      <h1 className={styles.title}>Daniel Pitfield</h1>
      <h3 className={styles.subTitle}>Web Developer</h3>
      <a className={styles.link} href="#projects">Browse Projects</a>
    </section>
  );
};

export default HomeSection;
