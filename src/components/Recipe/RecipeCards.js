import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RecipeCards = ({ posts }) => (
  <CardsWrapper>
    {posts.map(({ node: post }) => (
      <RecipeCard post={post} key={post.id}/>
    ))}
  </CardsWrapper>
);

RecipeCards.propTypes = {
  post: PropTypes.array
};

export default RecipeCards;
