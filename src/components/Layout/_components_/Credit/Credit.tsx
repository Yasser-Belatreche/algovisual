import React from "react";

import styles from "../../Layout.module.scss";

interface Props {}

const Credit: React.FC<Props> = () => {
  return (
    <div className={styles.creditContainer}>
      <p>
        made with ❤️ by{" "}
        <span>
          <a
            href="https://www.linkedin.com/in/yasser-belatreche-6b450620a/"
            target={"_blank"}
            rel="noreferrer"
          >
            yasser
          </a>
        </span>
      </p>
    </div>
  );
};

export { Credit };
