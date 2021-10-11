import React from "react";
import { motion } from "framer-motion";

import { animations } from "utils/animations";

import "components/MainContent/MainContent.scss";

const MainSection = ({ title, sectionClass, children }) => {
  return (
    <section className={`main__block ${sectionClass}`}>
      <div className="main__block-container container">
        <motion.h2 className="main__title" {...animations.topDown}>
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
};

export default MainSection;
