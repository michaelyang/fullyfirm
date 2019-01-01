import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DirectionsWrapper = styled.div``;
const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--ff-blue);
`;
const Steps = styled.ol`
  margin: 0;
  padding: 0;
  list-style-type: none;
  counter-reset: li;
  li {
    display: flex;
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }
  li::before {
    counter-increment: li;
    color: var(--ff-yellow);
    content: counter(li, decimal-leading-zero);
    font-weight: bold;
    font-size: 3rem;
    margin-right: 0.5rem;
    line-height: 1;
  }
`;

const Directions = ({ directions }) => (
  <DirectionsWrapper>
    <Title>Directions</Title>
    <Steps>
      {directions.map((direction, index) => (
        <li key={index}>
          <p>{direction}</p>
        </li>
      ))}
    </Steps>
  </DirectionsWrapper>
);

Directions.propTypes = {
  directions: PropTypes.array
};

export default Directions;
