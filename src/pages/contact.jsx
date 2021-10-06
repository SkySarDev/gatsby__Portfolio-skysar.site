import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import MainSection from "components/MainContent/MainSection";
import SocialsIcons from "components/UI/SocialsIcons";

import "components/MainContent/MainContentContact.scss";

const Contact = ({ data }) => {
  const { locale } = useIntl();
  const { title, field_name, field_email, field_message, button_name } =
    data.allStrapiContact.nodes.find(item => item.locale === locale);

  const onSubmitHandler = e => {
    e.preventDefault();

    console.log(e.target);
    e.target.reset();
  };

  return (
    <Layout title={title}>
      <MainSection title={title} sectionClass="contact">
        <div className="main__content row">
          <div className="contact__form">
            <form id="contact-form" onSubmit={onSubmitHandler}>
              <div className="row">
                <div className="contact__form-name col-sm">
                  <input
                    type="text"
                    name="name"
                    placeholder={field_name}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="contact__form-email col-sm">
                  <input
                    type="email"
                    name="email"
                    placeholder={field_email}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <textarea
                name="message"
                rows="5"
                placeholder={field_message}
                required
              />
              <input
                id="honeypot"
                type="text"
                name="honeypot"
                defaultValue=""
              />
              <button
                className="contact__button button button--light"
                type="submit"
              >
                {button_name}
              </button>
            </form>
          </div>
          <SocialsIcons
            listClass="contact__socials-list"
            itemsClass="contact__socials-item"
            iconsClass="contact__socials-icon"
          />
        </div>
      </MainSection>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query Contact {
    allStrapiContact {
      nodes {
        locale
        title
        field_name
        field_email
        field_message
        button_name
      }
    }
  }
`;
