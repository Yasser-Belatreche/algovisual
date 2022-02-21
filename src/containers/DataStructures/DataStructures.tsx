import React from "react";

// styles
import styles from "./DataStructures.module.scss";

// utils
import { IMAGES } from "../../utils/constants/Images";

// components
import { Layout } from "../../components/Layout/Layout";
import { PageHeader } from "../../components/PageHeader/PageHeader";

interface Props {}

const DataStructures: React.FC<Props> = () => {
  return (
    <Layout navbarReversed>
      <PageHeader
        title="Data Structures"
        backgroundImage={IMAGES.dataStructuresHeaderBg}
      />
    </Layout>
  );
};

export { DataStructures };
