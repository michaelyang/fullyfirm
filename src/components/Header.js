import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logos/logo.png';
import styled from 'styled-components';
import MainNav from './NavBar/MainNav';
import FixedNav from './NavBar/FixedNav';
import MobileNav from './NavBar/MobileNav';

const HeaderWrapper = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 6rem;
  }
`;

const Logo = styled(Link)`
  margin: auto;
  padding: 1.5rem 0 1.5rem 0;
  img {
    width: 300px;
  }
  @media (max-width: 768px) {
    display: None;
  }
`;

export default class Header extends React.Component {
  state = { scroll: 0, menuVisible: false };

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
        <MobileNav />
        <Logo to="/">
          <img src={logo} alt="FullyFirm" />
        </Logo>
        <MainNav />
        <FixedNav
          active={this.state.scroll > this.state.top ? 'true' : 'false'}
        />
      </HeaderWrapper>
    );
  }
}
