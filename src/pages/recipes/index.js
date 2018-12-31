import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import RecipeCards from '../../components/Recipe/RecipeCards';

const RecipeTitle = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  color: var(--ff-blue);
`;

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
        <RecipeTitle>Recipes</RecipeTitle>
        <div>
          <SubHeading>Latest Recipes</SubHeading>
          <RecipeCards posts={posts} />
          {posts.map(({ node: post }) => (
            <div
              className="content"
              style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
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
  query RecipesQuery {
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
