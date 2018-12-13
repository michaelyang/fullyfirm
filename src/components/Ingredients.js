import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => (
  <div>
    <h2>Ingredients</h2>
    <ul>
      {ingredients.map(ingredient => (
        <li key={ingredient.item} className="is-size-5">
          <p>{ingredient.item}</p>
          <p>{ingredient.description}</p>
        </li>
      ))}
    </ul>
  </div>
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
