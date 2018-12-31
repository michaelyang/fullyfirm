import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
`;

const CardDescription = styled.div`
  flex: 1;
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
