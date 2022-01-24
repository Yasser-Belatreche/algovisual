import React from "react";

// styles
import styles from "./Home.module.scss";

interface Props {}

const Home: React.FC<Props> = () => {
  return <div className={styles.container}>Hello world</div>;
};

export { Home };
