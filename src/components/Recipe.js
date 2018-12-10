import React from 'react';
import PropTypes from 'prop-types';

const Recipe = ({ data }) => (
  <div className="columns">
    <ul>
      {data.map(ingredient => (
        <li key={ingredient.name} className="is-size-5">
          <p>
            {ingredient.amount} {ingredient.name}
          </p>
          <p>{ingredient.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

Recipe.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default Recipe;
