import React from "react";

// styles
import styles from "./Algorithms.module.scss";

// components
import { Layout } from "../../components/Layout/Layout";
import { IMAGES } from "../../utils/constants/Images";
import { PageHeader } from "../../components/PageHeader/PageHeader";

interface Props {}

const Algorithms: React.FC<Props> = () => {
  return (
    <Layout navbarReversed>
      <PageHeader
        title="Algorithms"
        backgroundImage={IMAGES.algorithmsHeaderBg}
      />
    </Layout>
  );
};

export { Algorithms };
