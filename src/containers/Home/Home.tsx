import React from "react";
import { Layout } from "../../components/Layout/Layout";

// styles
import styles from "./Home.module.scss";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <div className={styles.container}>Home</div>
    </Layout>
  );
};

export { Home };
