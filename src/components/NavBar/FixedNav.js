import React from 'react';
import { Link } from 'gatsby';
import logoNotext from '../../img/logos/logo-notext.svg';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  background-color: rgba(24, 24, 24, 0.95);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  visibility: ${props => (props.active === 'true' ? '' : 'hidden')};
  transform: ${props => (props.active === 'true' ? '' : 'translateY(-100%)')};
  transition: transform 0.3s, visibility 0.3s;
  @media (max-width: 768px) {
    display: None;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    li {
      white-space: nowrap;
      padding: 1rem 4rem;
      font-size: 2rem;
      color: var(--ff-grey);
    }
  }
`;

const FixedNavLogo = styled(Link)`
  flex: 1;
  padding: 0.5rem 0 0.5rem 2.5rem;
  img {
    width: 50px;
  }
`;

const PlaceHolder = styled.div`
  flex: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:nth-child(3n + 1) {
    li:focus,
    li:hover,
    li:active {
      color: var(--ff-pink);
    }
  }
  &:nth-child(3n + 2) {
    li:focus,
    li:hover,
    li:active {
      color: var(--ff-blue);
    }
  }
  &:nth-child(3n + 3) {
    li:focus,
    li:hover,
    li:active {
      color: var(--ff-yellow);
    }
  }
`;

const FixedNav = ({ active }) => (
  <Nav active={active}>
    <FixedNavLogo to="/">
      <img src={logoNotext} alt="FullyFirm" />
    </FixedNavLogo>
    <ul>
      <StyledLink to="/about">
        <li>ABOUT</li>
      </StyledLink>
      <StyledLink to="/recipes">
        <li>RECIPES</li>
      </StyledLink>
    </ul>
    <PlaceHolder />
  </Nav>
);

export default FixedNav;
