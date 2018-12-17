import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';
import logoNotext from '../img/logo-notext.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const MainNav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: center;
    list-style: none;
    li {
      padding: 1rem 4rem;
      font-size: 2rem;
      color: var(--ff-black);
    }
  }
`;

const FixedNav = styled(MainNav)`
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
  ul {
    li {
      white-space: nowrap;
      font-weight: bold;
      color: var(--ff-grey);
    }
  }
`;

const Logo = styled(Link)`
  margin: auto;
  padding: 1.5rem 0 1.5rem 0;
  img {
    width: 300px;
  }
`;

const FixedNavLogo = styled(Link)`
  flex: 1;
  padding: 0.5rem 0 0.5rem 2.5rem;
  img {
    width: 50px;
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

export default class Header extends React.Component {
  state = { scroll: 0 };
  componentDidMount() {
    const el = document.querySelector('header');
    this.setState({
      top: el.offsetTop + el.offsetHeight,
      scroll: window.scrollY
    });
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      scroll: window.scrollY
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <Logo to="/">
          <img src={logo} alt="FullyFirm" />
        </Logo>
        <MainNav role="navigation">
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
        </MainNav>
        <FixedNav
          active={this.state.scroll > this.state.top ? 'true' : 'false'}
        >
          <FixedNavLogo to="/">
            <img src={logoNotext} alt="FullyFirm" />
          </FixedNavLogo>
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
          <FixedNavLogo to="/" />
        </FixedNav>
      </HeaderWrapper>
    );
  }
}
