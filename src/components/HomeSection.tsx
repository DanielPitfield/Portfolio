import styles from "../styles/HomeSection.module.scss";

const HomeSection = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Daniel Pitfield</h1>
      <h3 className={styles.subTitle}>Web Developer</h3>
    </section>
  );
};

export default HomeSection;
