import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  PersonIcon,
  PrepTimerIcon,
  ActiveTimerIcon,
  FireIcon,
  EarthIcon
} from './RecipeIcons';

const RecipeStatsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const RecipeStats = ({ yields, cookTime, difficulty, cuisine }) => (
  <RecipeStatsWrapper>
    <PersonIcon width="30" height="30" fill="" value="6 - 7" />
    <PrepTimerIcon width="30" height="30" fill="" value="30 mins" />
    <ActiveTimerIcon width="30" height="30" fill="" value="15 mins" />
    <FireIcon width="30" height="30" fill="" value="5/10" />
    <EarthIcon width="30" height="30" fill="" value="Japanese" />
  </RecipeStatsWrapper>
  /*
  <RecipeStatsWrapper>
  <PersonIcon width="50" height="50" fill="" value="6" />
  <TimerIcon width="50" height="50" fill="" value="30 mins" />
  <FireIcon width="50" height="50" fill="" value="5/10" />
  <EarthIcon width="50" height="50" fill="" value="Japanese" />
</RecipeStatsWrapper>
*/
);

RecipeStats.propTypes = {
  yields: PropTypes.string,
  cookTime: PropTypes.string,
  difficulty: PropTypes.string,
  cuisine: PropTypes.string
};

export default RecipeStats;
