import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: None;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    li {
      white-space: nowrap;
      padding: 1rem 3rem;
      font-size: 2rem;
      color: var(--ff-black);
    }
  }
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

const MainNav = () => (
  <Nav role="navigation">
    <ul>
      <StyledLink to="/about">
        <li>ABOUT</li>
      </StyledLink>
      <StyledLink to="/recipes">
        <li>RECIPES</li>
      </StyledLink>
    </ul>
  </Nav>
);

export default MainNav;
