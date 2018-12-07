import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${props =>
    props.collapsed === 'true' ? 'var(--ff-pink)' : 'transparent'};
  transition: background-color 0.4s ease-in-out;
`;

const Logo = styled(Link)`
  margin: auto;
  padding: 1.5rem 0 1.5rem 0;
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
  padding: 1rem 4rem;
  font-size: 1.8rem;
  display: flex;
  color: var(--ff-black);
`;

export default class Header extends React.Component {
  state = { collapsed: 'false' };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      collapsed: window.scrollY > 0 ? 'true' : 'false'
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <Logo collapsed={this.state.collapsed} to="/">
          <img src={logo} alt="Fully Firm" />
        </Logo>
        <Nav role="navigation" collapsed={this.state.collapsed}>
          <NavItems>
            <StyledLink to="/">
              <NavItem>HOME</NavItem>
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
            <StyledLink to="/about">
              <NavItem>ABOUT</NavItem>
            </StyledLink>
          </NavItems>
        </Nav>
      </HeaderWrapper>
    );
  }
}
