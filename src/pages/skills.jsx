import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import MainSection from "components/MainContent/MainSection";

import "components/MainContent/MainContentSkills.scss";

const IndexPage = ({ data }) => {
  const { locale } = useIntl();
  const { title, skillsList } = data.allStrapiSkills.nodes.find(
    item => item.locale === locale
  );

  const SkillCardRender = ({ title, icon, list }) => {
    const skillImg = require(`../images/skills/${icon}.svg`).default;

    return (
      <div className="skills-card">
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
      </div>
    );
  };

  return (
    <Layout title={title}>
      <MainSection title={title} sectionClass="skills">
        <div className="main__content row row-cols-sm-2 row-cols-xl-4">
          {skillsList.map(skillBlock => (
            <SkillCardRender key={skillBlock.title} {...skillBlock} />
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
