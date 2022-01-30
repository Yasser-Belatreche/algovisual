import React from "react";
import { Layout } from "../../components/Layout/Layout";

// styles
import styles from "./Home.module.scss";

// components
import { Hero } from "./_components_/Hero/Hero";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export { Home };
