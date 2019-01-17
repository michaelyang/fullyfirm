import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import PageTitle from '../../components/PageTitle';

const TheLabPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <section>
    <Helmet title={`The Lab | ${title}`} />
    <PageTitle title="The Lab" color="var(--ff-yellow)" />
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
