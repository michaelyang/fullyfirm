import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Step = styled.li`
  font-size: 2rem;
`;

const Directions = ({ directions }) => (
  <div>
    <h2>Directions</h2>
    <ol>
      {directions.map((direction, index) => (
        <Step key={index}>
          <p>{direction}</p>
        </Step>
      ))}
    </ol>
  </div>
);

Directions.propTypes = {
  directions: PropTypes.array
};

export default Directions;
