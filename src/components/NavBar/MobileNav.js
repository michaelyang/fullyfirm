import React from 'react';
import styled from 'styled-components';
import Menu from './Menu.js';
import logoNotext from '../../img/logos/logo-notext.svg';
import { Link } from 'gatsby';

const MobileNavWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 6rem;
  width: 100%;
  background-color: var(--ff-black);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLogo = styled(Link)`
  position: absolute;
  z-index: -1;
  left: 50%;
  margin-left: -25px;
  top: 50%;
  margin-top: -20px;
  img {
    width: 50px;
  }
`;

const ToggleWrapper = styled.div`
  flex: 1;
  user-select: none;
  cursor: pointer;
  height: 2rem;
  right: 5%;
  position: fixed;
  top: 2rem;
  width: 3.6rem;
  z-index: 2;
`;

const Toggle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease;
  background: ${props =>
    props.expanded === true ? 'transparent' : 'var(--ff-blue)'};
  content: '';
  height: 0.4rem;
  width: 100%;
  margin-top: 0;
  &:after {
    position: absolute;
    top: 50%;
    transition: all 0.5s ease;
    content: '';
    height: 0.4rem;
    width: 100%;
    margin-top: ${props => (props.expanded === true ? '0rem' : '1rem')};
    transform: ${props =>
      props.expanded === true ? 'rotate(45deg)' : 'translateY(-50%)'};
    background: ${props =>
      props.expanded === true ? 'var(--ff-black)' : 'var(--ff-yellow)'};
  }
  &:before {
    position: absolute;
    top: 50%;
    transition: all 0.5s ease;
    content: '';
    height: 0.4rem;
    width: 100%;
    margin-top: ${props => (props.expanded === true ? '0rem' : '-1rem')};
    transform: ${props =>
      props.expanded === true ? 'rotate(-45deg)' : 'translateY(-50%)'};
    background: ${props =>
      props.expanded === true ? 'var(--ff-black)' : 'var(--ff-pink)'};
  }
`;

class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  closeMenu = () => {
    this.setState({ showMenu: false });
  };

  render() {
    return (
      <MobileNavWrapper>
        <MobileNavLogo to="/">
          <img src={logoNotext} alt="FullyFirm" />
        </MobileNavLogo>
        <ToggleWrapper onClick={this.toggleMenu}>
          <Toggle expanded={this.state.showMenu} />
        </ToggleWrapper>
        <Menu
          visible={this.state.showMenu ? true : false}
          close={this.closeMenu}
        />
      </MobileNavWrapper>
    );
  }
}

export default MobileNav;
