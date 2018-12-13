import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Ingredients from '../components/Ingredients';
import Directions from '../components/Directions';

const RecipeTitle = styled.h1`
  font-size: 2rem;
`;
const ArticleWrapper = styled.article`
  width: 80%;
  margin: auto;
`;
const RecipeWrapper = styled.section`
  display: flex;
  justify-content: center;
`;
const IngredientsWrapper = styled.div`
  flex: 1;
  position: sticky;
  top: 5rem;
  align-self: flex-start;
  height: auto;
`;
const DirectionsWrapper = styled.div`
  flex: 3;
`;

export const RecipeTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  ingredients,
  directions
}) => {
  const PostContent = contentComponent || Content;

  return (
    <ArticleWrapper>
      {helmet || ''}
      <section>
        <header>
          <RecipeTitle>{title}</RecipeTitle>
        </header>
        <p>{description}</p>
      </section>
      <RecipeWrapper>
        <IngredientsWrapper>
          <Ingredients ingredients={ingredients} />
        </IngredientsWrapper>
        <DirectionsWrapper>
          <Directions directions={directions} />
        </DirectionsWrapper>
      </RecipeWrapper>
      <PostContent content={content} />
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
    </ArticleWrapper>
  );
};

RecipeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  helmet: PropTypes.object,
  ingredients: PropTypes.array,
  directions: PropTypes.array
};

const RecipePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RecipeTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Recipe">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        ingredients={post.frontmatter.ingredients}
        directions={post.frontmatter.directions}
      />
    </Layout>
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
        ingredients {
          item
          description
        }
        directions
      }
    }
  }
`;
