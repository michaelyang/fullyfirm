import React from 'react';
import styled from 'styled-components';
import Menu from './Menu.js';
import logoNotext from '../../img/logos/logo-notext.svg';
import { Link } from 'gatsby';
import './collapsibleNavStyles.css';

const ToggleConatiner = styled.div`
  position: fixed;
  top: 0;
  height: 6rem;
  width: 100%;
  background-color: var(--ff-black);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (min-width: 768px) {
    display: none;
  }
`;

const FixedNavLogo = styled(Link)`
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

class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const menuClass = this.state.showMenu ? 'expanded' : '';
    return (
      <ToggleConatiner>
        <FixedNavLogo to="/">
          <img src={logoNotext} alt="FullyFirm" />
        </FixedNavLogo>
        <div className={`nav-toggle ${menuClass}`} onClick={this.toggleMenu}>
          <div className={`nav-toggle-bar ${menuClass}`} />
        </div>
        <Menu visible={this.state.showMenu ? true : false} />
      </ToggleConatiner>
    );
  }
}

export default MobileNav;
