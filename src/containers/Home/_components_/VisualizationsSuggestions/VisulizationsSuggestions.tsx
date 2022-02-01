import React from "react";

// styles
import styles from "../../Home.module.scss";

// components
import { VisualizationDescriptionList } from "../../../../components/VisualizationDescriptionList/VisualizationDescriptionList";
import { SUGGESTIONS } from "./_utils_/suggestions";

const VisulizationsSuggestions = () => {
  return (
    <div className={styles.visulizationsSuggestions}>
      <VisualizationDescriptionList
        listItems={SUGGESTIONS}
        firstItemTextPosition="right"
      />
    </div>
  );
};

export { VisulizationsSuggestions };
