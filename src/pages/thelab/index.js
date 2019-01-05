import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

const Title = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  color: var(--ff-yellow);
`;

const TheLabPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <section>
    <Helmet title={`The Lab | ${title}`} />
    <Title>The Lab</Title>
    <div />
  </section>
);

export default TheLabPage;

export const theLabPageQuery = graphql`
  query theLabQuery {
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
