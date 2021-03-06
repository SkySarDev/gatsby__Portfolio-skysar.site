import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import { motion } from "framer-motion";

import { animations } from "utils/animations";

import Layout from "components/Layout";
import MainSection from "components/MainContent/MainSection";

import "components/MainContent/MainContentSkills.scss";

const IndexPage = ({ data }) => {
  const { locale } = useIntl();
  const { title, skillsList } = data.allStrapiSkills.nodes.find(
    item => item.locale === locale
  );

  const SkillCardRender = ({ title, icon, list, index }) => {
    const skillImg = require(`../images/skills/${icon}.svg`).default;

    return (
      <motion.div
        className="skills-card"
        {...animations.appearance}
        custom={index * 0.1}
      >
        <div className="skills-card__content">
          <div className="skills-card__header">
            <img className="skills-card__icon" src={skillImg} alt={title} />
            <h3 className="skills-card__title">{title}</h3>
          </div>
          <div className="skills-card__body">
            <ul className="skills-card__list">
              {list.map(skill => (
                <li className="skills-card__item" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <Layout title={title}>
      <MainSection title={title} sectionClass="skills">
        <div className="main__content skills__wrapper row row-cols-sm-2 row-cols-xl-3">
          {skillsList.map((skillBlock, i) => (
            <SkillCardRender key={skillBlock.title} {...skillBlock} index={i} />
          ))}
        </div>
      </MainSection>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Skills {
    allStrapiSkills {
      nodes {
        id
        locale
        title
        skillsList {
          title
          icon
          list
        }
      }
    }
  }
`;
