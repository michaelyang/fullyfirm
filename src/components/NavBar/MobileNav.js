import React from 'react';
import styled from 'styled-components';
import Menu from './Menu.js';
import './collapsibleNavStyles.css';

const ToggleConatiner = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  height: 6rem;
  width: 100%;
  background-color: var(--ff-black);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (min-width: 768px) {
    display: none;
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
        <Menu visible={this.state.showMenu ? true : false} />
        <div className={`nav-toggle ${menuClass}`} onClick={this.toggleMenu}>
          <div className={`nav-toggle-bar ${menuClass}`} />
        </div>
      </ToggleConatiner>
    );
  }
}

export default MobileNav;
