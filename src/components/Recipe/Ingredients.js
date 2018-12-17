import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IngredientsWrapper = styled.div`
  padding: 0 1rem 0 1rem 0;
`;
const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--ff-pink);
`;
const IngredientsListWrapper = styled.ul`
  padding: 1rem;
  border: 0.1rem dotted #666;
  li {
    list-style-type: none;
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
  <IngredientsWrapper>
    <Title>Ingredients</Title>
    <IngredientsListWrapper>
      {ingredients.map(ingredient => (
        <li key={ingredient.item} className="is-size-5">
          <Item>{ingredient.item}</Item>
          <ItemDescription>{ingredient.description}</ItemDescription>
        </li>
      ))}
    </IngredientsListWrapper>
  </IngredientsWrapper>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default Ingredients;
