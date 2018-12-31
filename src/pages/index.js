import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import FeatureGrid from '../components/Homepage/FeatureGrid';

const IndexPageWrapper = styled.div``;
const FeaturedSectionWrapper = styled.section`
  h1 {
    font-size: 3.6rem;
    border-bottom: solid 0.5rem black;
    padding-bottom: 2.5rem;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: featuredPosts } = data.featured;

    return (
      <IndexPageWrapper>
        <FeaturedSectionWrapper>
          <h1>Latest Stories</h1>
          <FeatureGrid featuredPosts={featuredPosts} />
        </FeaturedSectionWrapper>
      </IndexPageWrapper>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    featured: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    featured: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { in: ["recipe-post"] } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            cover_image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
