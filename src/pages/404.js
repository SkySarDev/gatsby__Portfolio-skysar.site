import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "components/Layout/Layout";
import MainSection from "components/MainContent/MainSection";

const NotFoundPage = () => {
  const title = useIntl().messages["404.notFound"];

  return (
    <Layout title={title}>
      <MainSection title={title}>
        <div style={{ textAlign: "center" }}>
          <StaticImage
            src="../images/404.png"
            alt={title}
            formats={["auto", "webp", "avif"]}
            placeholder={"TRACED_SVG"}
          />
        </div>
      </MainSection>
    </Layout>
  );
};

export default NotFoundPage;
