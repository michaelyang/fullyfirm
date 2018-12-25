import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import './collapsibleNavStyles.css';
import { TimelineLite, Power4, Back } from 'gsap';

const MenuWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  visibility: hidden;
`;
const MenuList = styled.ul`
  position: absolute;
  top: 0;
  transform: translateY(10%);
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  li {
    font-weight: bold;
    white-space: nowrap;
    padding: 1.8rem;
    font-size: 3.6rem;
    color: var(--ff-black);
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
class Menu extends Component {
  constructor(props) {
    super(props);
    this.menu = null;
    this.menuBg1 = null;
    this.menuBg2 = null;
    this.menuBg3 = null;
    this.menuList = null;
    this.menuTween = new TimelineLite({ paused: true });
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  keyDownHandler = e => {
    if (e.keyCode === 27) this.props.close();
  };

  componentDidMount() {
    this.menuTween
      .to(this.menu, 0, { autoAlpha: 1 })
      .to(
        this.menuBg1,
        0.8,
        {
          y: 0,
          ease: Power4.easeInOut
        },
        0
      )
      .to(
        this.menuBg2,
        0.8,
        {
          scaleY: 1,
          ease: Power4.easeInOut
        },
        0
      )
      .to(
        this.menuBg3,
        0.8,
        {
          y: 0,
          ease: Power4.easeInOut
        },
        0
      )
      .to(this.menuList, 0.1, { delay: 0, autoAlpha: 1 }, '-=0.3')
      .to(
        this.menuList,
        0.3,
        {
          y: 0,
          delay: 0,
          ease: Back.easeInOut
        },
        '-=0.4'
      )
      .reversed(true)
      .paused(false);
  }

  componentDidUpdate() {
    if (this.props.visible) {
      window.addEventListener('keydown', this.keyDownHandler);
    } else {
      window.removeEventListener('keydown', this.keyDownHandler);
    }
    this.menuTween.reversed(!this.props.visible);
  }

  render() {
    return (
      <MenuWrapper
        ref={div => (this.menu = div)}
        onClick={this.props.close}
        visible={this.props.visible}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            id="menu-bg-2"
            ref={polygon => (this.menuBg2 = polygon)}
            x="-100"
            y="100"
            width="200"
            height="200"
            transform="rotate(-45) scale(1, 0)"
            fill="#45c7c1"
          />
          <polygon
            id="menu-bg-1"
            ref={polygon => (this.menuBg1 = polygon)}
            points="0,0 100,0 100,15 0,45"
            transform="translate(0, -100)"
            fill="#e1487a"
          />
          <polygon
            id="menu-bg-3"
            ref={polygon => (this.menuBg3 = polygon)}
            points="0,85 100,55 100,100 0,100"
            transform="translate(0, 100)"
            fill="#e9b533"
          />
        </svg>
        <MenuList
          ref={ul => (this.menuList = ul)}
          onClick={event => event.stopPropagation()}
        >
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
        </MenuList>
      </MenuWrapper>
    );
  }
}

export default Menu;
