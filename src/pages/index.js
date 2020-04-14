import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import RecipeCards from '../components/Recipe/RecipeCards';
import PageTitle from '../components/PageTitle';

const SubHeading = styled.h2`
  font-size: 2.4rem;
  border-bottom: solid 0.5rem black;
  padding-bottom: 1rem;
`;

export default class RecipesPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section>
        <PageTitle title="Recipes" color="var(--ff-blue)" />
        <div>
          <SubHeading>Latest Recipes</SubHeading>
          <RecipeCards posts={posts} />
        </div>
      </section>
    );
  }
}

RecipesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query PageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "recipe-post" } } }
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
