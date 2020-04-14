import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  a:link, a:visited {
    text-decoration: none;
    color: black;
  }
  margin: 0 15px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border: 2px solid black;
`;

const CardDescription = styled.div`
  flex: 1;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 10px;

`;

const RecipeCard = ({ post }) => (
  <CardWrapper>
    <Link to={post.fields.slug}>
      <PreviewCompatibleImage
        imageInfo={{
          alt: post.frontmatter.title,
          image: post.frontmatter.cover_image,
          style: { flex: 4 }
        }}
      />
      <CardDescription>{post.frontmatter.title}</CardDescription>
    </Link>
  </CardWrapper>
);

RecipeCard.propTypes = {
  post: PropTypes.object
};

export default RecipeCard;
