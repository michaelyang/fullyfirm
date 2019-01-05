import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FixedIngredientsWrapper = styled.div`
  padding: 0 1rem 0 1rem 0;
  width: 100%;
  @media (max-width: 768px) {
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    overflow: auto;
    h2,
    ul {
      margin-left: 5%;
      margin-right: 5%;
    }
  }
`;
const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--ff-pink);
`;
const FixedIngredientsListWrapper = styled.ul`
  padding: 1rem;
  border: 0.1rem dotted #666;
  li {
    list-style-type: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Item = styled.span`
  font-size: 1.6rem;
  margin-block-end: 0em;
`;
const ItemDescription = styled.p`
  margin-block-start: 0.5rem;
  padding-left: 2rem;
  font-size: 1.2rem;
`;

const Ingredients = ({ ingredients }) => (
  <FixedIngredientsWrapper>
    <Title>Ingredients</Title>
    <FixedIngredientsListWrapper>
      {ingredients.map(ingredient => (
        <li key={ingredient.item}>
          <Item>{ingredient.item}</Item>
          <ItemDescription>{ingredient.description}</ItemDescription>
        </li>
      ))}
    </FixedIngredientsListWrapper>
  </FixedIngredientsWrapper>
);

FxiedIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default FxiedIngredients;
