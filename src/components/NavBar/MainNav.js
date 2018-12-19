import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
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
      <StyledLink to="/">
        <li>HOME</li>
      </StyledLink>
      <StyledLink to="/recipes">
        <li>RECIPES</li>
      </StyledLink>
      <StyledLink to="/thelab">
        <li>THE LAB</li>
      </StyledLink>
      <StyledLink to="/places">
        <li>PLACES</li>
      </StyledLink>
      <StyledLink to="/store">
        <li>STORE</li>
      </StyledLink>
      <StyledLink to="/about">
        <li>ABOUT</li>
      </StyledLink>
    </ul>
  </Nav>
);

export default MainNav;
