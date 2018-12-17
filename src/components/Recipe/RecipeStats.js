import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaUser, FaClock, FaFire, FaGlobe } from 'react-icons/fa';

const RecipeStatsWrapper = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Yields = styled.li``;

const RecipeStats = ({ yields, cookTime, difficulty, cuisine }) => (
  <RecipeStatsWrapper>
    <Yields>
      <FaUser />8
    </Yields>
    <FaClock />
    <FaFire />
    <FaGlobe />
  </RecipeStatsWrapper>
);

RecipeStats.propTypes = {
  yields: PropTypes.string,
  cookTime: PropTypes.string,
  difficulty: PropTypes.string,
  cuisine: PropTypes.string
};

export default RecipeStats;
