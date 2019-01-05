import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import RecipeHeader from '../components/Recipe/RecipeHeader';
import Ingredients from '../components/Recipe/Ingredients';
import Directions from '../components/Recipe/Directions';

const ArticleWrapper = styled.article`
  width: 100%;
  margin: auto;
`;
const RecipeWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: solid 0.25rem black;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const IngredientsWrapper = styled.div`
  flex: 1;
  position: sticky;
  top: 5rem;
  align-self: flex-start;
  height: auto;
  padding-right: 2rem;
  @media (max-width: 768px) {
    padding-right: 0;
    position: static;
  }
`;
const DirectionsWrapper = styled.div`
  flex: 2.5;
  padding: 0 1rem 0 1rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const RecipeTemplate = ({
  content,
  contentComponent,
  helmet,
  description,
  tags,
  title,
  coverImage,
  ingredients,
  directions
}) => {
  const PostContent = contentComponent || Content;
  return (
    <ArticleWrapper>
      {helmet || ''}
      <RecipeHeader
        title={title}
        coverImage={coverImage}
        description={description}
      />
      {tags && tags.length ? (
        <div style={{ marginTop: `4rem` }}>
          <h4>Tags</h4>
          <ul className="taglist">
            {tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <RecipeWrapper>
        <IngredientsWrapper>
          <Ingredients ingredients={ingredients} />
        </IngredientsWrapper>
        <DirectionsWrapper>
          <Directions directions={directions} />
        </DirectionsWrapper>
      </RecipeWrapper>
      <PostContent content={content} />
    </ArticleWrapper>
  );
};

RecipeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  coverImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.object,
  ingredients: PropTypes.array,
  directions: PropTypes.array
};

const RecipePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <RecipeTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet titleTemplate="%s | Recipe">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      coverImage={post.frontmatter.cover_image}
      ingredients={post.frontmatter.ingredients}
      directions={post.frontmatter.directions}
    />
  );
};

RecipePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default RecipePost;

export const recipePostQuery = graphql`
  query RecipeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        cover_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ingredients {
          item
          description
        }
        directions
      }
    }
  }
`;
