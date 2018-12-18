import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import personIcon from '../../img/icons/person.svg';
import timerIcon from '../../img/icons/timer.svg';
import fireIcon from '../../img/icons/fire.svg';
import earthIcon from '../../img/icons/earth.svg';

const RecipeStatsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    display: flex;
  }
`;
const StatItem = styled.div`
  span {
    align-self: center;
    font-size: 2rem;
  }
  span:before {
    content: url(${props => props.icon});
    padding: 0.5rem;
    display: inline-block;
    vertical-align: middle;
  }
  &:nth-child(4n + 1) {
    background-color: var(--ff-pink);
  }
  &:nth-child(4n + 2) {
    background-color: var(--ff-blue);
  }
  &:nth-child(4n + 3) {
    background-color: var(--ff-beige);
  }
  &:nth-child(4n + 4) {
    background-color: var(--ff-yellow);
  }
`;
const RecipeStats = ({ yields, cookTime, difficulty, cuisine }) => (
  <RecipeStatsWrapper>
    <StatItem icon={personIcon}>
      <span>7 people</span>
    </StatItem>
    <StatItem icon={timerIcon}>
      <span>30 minutes</span>
    </StatItem>
    <StatItem icon={fireIcon}>
      <span>7/10</span>
    </StatItem>
    <StatItem icon={earthIcon}>
      <span>Japanese</span>
    </StatItem>
  </RecipeStatsWrapper>
);

RecipeStats.propTypes = {
  yields: PropTypes.string,
  cookTime: PropTypes.string,
  difficulty: PropTypes.string,
  cuisine: PropTypes.string
};

export default RecipeStats;
