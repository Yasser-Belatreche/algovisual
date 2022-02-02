import React from "react";

// styles
import styles from "../../Home.module.scss";

// components
import { VisualizationDescriptionList } from "../../../../components/VisualizationDescriptionList/VisualizationDescriptionList";

// utils
import { SUGGESTIONS } from "./_utils_/suggestions";

const VisulizationsSuggestions = () => {
  return (
    <VisualizationDescriptionList
      listItems={SUGGESTIONS}
      firstItemTextPosition="right"
      containerClass={styles.visulizationsSuggestions}
    />
  );
};

export { VisulizationsSuggestions };
