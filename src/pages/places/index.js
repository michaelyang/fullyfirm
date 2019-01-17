import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import PageTitle from '../../components/PageTitle';

const Title = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  color: var(--ff-pink);
`;

const PlacesPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <section>
    <Helmet title={`Places | ${title}`} />
    <PageTitle title="Places" color="var(--ff-pink)" />
    <div />
  </section>
);

export default PlacesPage;

export const PlacesPageQuery = graphql`
  query Placesquery {
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
