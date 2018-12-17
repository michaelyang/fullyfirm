import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

const RecipeTitle = styled.h1`
  font-size: 3.6rem;
`;
const Description = styled.p`
  font-size: 1.6rem;
  padding: 1rem;
`;

const RecipeHeader = ({ title, coverImage, description }) => (
  <header>
    <RecipeTitle>{title}</RecipeTitle>
    <PreviewCompatibleImage
      imageInfo={{
        alt: title,
        image: coverImage,
        style: { maxHeight: '600px' }
      }}
    />
    <Description>{description}</Description>
  </header>
);

RecipeHeader.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string
};

export default RecipeHeader;
