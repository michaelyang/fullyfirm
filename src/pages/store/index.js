import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

const Title = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  color: var(--ff-blue);
`;

const storePage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <section>
    <Helmet title={`Store | ${title}`} />
    <Title>Store</Title>
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
