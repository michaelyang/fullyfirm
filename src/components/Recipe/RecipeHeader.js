import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import RecipeStats from './RecipeStats';

const RecipeTitle = styled.h1`
  font-size: 3.6rem;
  padding-bottom: 2.5rem;
  border-bottom: solid 0.5rem black;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 500px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Description = styled.p`
  font-size: 1.6rem;
  padding: 1rem;
`;

const RecipeHeader = ({ title, coverImage, description }) => (
  <section>
    <RecipeTitle>{title}</RecipeTitle>
    <ImageWrapper>
      <PreviewCompatibleImage
        imageInfo={{
          alt: title,
          image: coverImage,
          style: { flex: 4 }
        }}
      />
      <RecipeStats />
    </ImageWrapper>
    <Description>{description}</Description>
  </section>
);

RecipeHeader.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string
};

export default RecipeHeader;
