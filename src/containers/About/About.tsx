import React from "react";

// styles
import styles from "./About.module.scss";

// components
import { Layout } from "../../components/Layout/Layout";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { IMAGES } from "../../utils/constants/Images";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Layout navbarReversed>
      <PageHeader title="About" backgroundImage={IMAGES.aboutHeaderBg} />
    </Layout>
  );
};

export { About };
