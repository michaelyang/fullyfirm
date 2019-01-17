import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import PageTitle from '../../components/PageTitle';

const storePage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <section>
    <Helmet title={`Store | ${title}`} />
    <PageTitle title="Store" color="var(--ff-blue)" />
    <div />
  </section>
);

export default storePage;

export const storePageQuery = graphql`
  query storeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
