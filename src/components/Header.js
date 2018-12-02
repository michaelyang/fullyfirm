import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;
const Logo = styled(Link)`
  margin: auto;
  padding: 1rem 0 0 0;
  img {
    width: 300px;
  }
`;
const NavItems = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
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
const NavItem = styled.li`
  padding: 1rem 3rem;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  color: #333;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo to="/">
      <img src={logo} alt="Fully Firm" />
    </Logo>
    <nav role="navigation">
      <NavItems>
        <StyledLink to="/about">
          <NavItem>ABOUT</NavItem>
        </StyledLink>
        <StyledLink to="/recipes">
          <NavItem>RECIPES</NavItem>
        </StyledLink>
        <StyledLink to="/thelab">
          <NavItem>THE LAB</NavItem>
        </StyledLink>
        <StyledLink to="/places">
          <NavItem>PLACES</NavItem>
        </StyledLink>
        <StyledLink to="/store">
          <NavItem>STORE</NavItem>
        </StyledLink>
      </NavItems>
    </nav>
  </HeaderWrapper>
);

export default Header;