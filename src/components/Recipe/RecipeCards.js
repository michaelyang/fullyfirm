import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RecipeCards = ({ posts }) => (
  <CardsWrapper>
    {posts.map(({ node: post }) => (
      <RecipeCard post={post} />
    ))}
  </CardsWrapper>
);

RecipeCards.propTypes = {
  post: PropTypes.array
};

export default RecipeCards;
