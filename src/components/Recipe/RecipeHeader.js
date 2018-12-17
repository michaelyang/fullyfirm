import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import RecipeStats from './RecipeStats';

const RecipeTitle = styled.h1`
  font-size: 3.6rem;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Description = styled.p`
  font-size: 1.6rem;
  padding: 1rem;
`;

const RecipeHeader = ({ title, coverImage, description }) => (
  <header>
    <RecipeTitle>{title}</RecipeTitle>
    <ImageWrapper>
      <PreviewCompatibleImage
        imageInfo={{
          alt: title,
          image: coverImage,
          style: { maxHeight: '400px', flex: 3 }
        }}
      />
      <RecipeStats />
    </ImageWrapper>
    <Description>{description}</Description>
  </header>
);

RecipeHeader.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string
};

export default RecipeHeader;
