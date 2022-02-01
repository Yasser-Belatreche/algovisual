import React from "react";
import { Layout } from "../../components/Layout/Layout";

// styles
import styles from "./Home.module.scss";

// components
import { Hero } from "./_components_/Hero/Hero";
import { Features } from "./_components_/Features/Features";
import { VisulizationsSuggestions } from "./_components_/VisualizationsSuggestions/VisulizationsSuggestions";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <VisulizationsSuggestions />
    </Layout>
  );
};

export { Home };
