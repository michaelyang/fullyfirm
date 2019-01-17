import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarProfileContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'main side1' 'main side2';
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'main main' 'side1 side2';
  }
`;

const SidebarProfile = () => (
  <SidebarProfileContainer>a</SidebarProfileContainer>
);

export default SidebarProfile;
