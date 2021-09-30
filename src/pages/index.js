import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl, changeLocale } from "gatsby-plugin-intl";

import Layout from "components/Layout";
import Seo from "components/seo";

const IndexPage = () => {
  const { locale } = useIntl();

  const onChangeLang = () => {
    const newLang = locale === "en" ? "ru" : "en";

    changeLocale(newLang);
  };

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Current languige: {locale}</p>
      <button onClick={onChangeLang}>change lang</button>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </Layout>
  );
};

export default IndexPage;
