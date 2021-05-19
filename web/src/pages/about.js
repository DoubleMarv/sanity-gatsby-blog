import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";

import { responsiveTitle1 } from "../components/typography.module.css";
import * as styles from "../components/pages-about.module.css";

export const query = graphql`
  query AboutpageQuery {
    pager:sanityPage(title: {eq: "About"}) {
        id
        title
        mainImage {
          asset {
            url
          }
        }
      }
  }
`;

const Aboutpage = (props) => {
  const { data, errors } = props;
  const hothotcont = data.pager;
  const bigimage = hothotcont.mainImage.asset.url;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Archive" />
      <Container>
        <h1 className={responsiveTitle1}>{hothotcont.title}</h1>
        {JSON.stringify(hothotcont, null, 3)}

        <img className={styles.bigpic} src={bigimage} alt={"Carlie Anglemire"}/>
      </Container>
    </Layout>
  );
};

export default Aboutpage;
