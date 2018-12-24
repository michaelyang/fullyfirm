import React, { Component } from 'react';
import styled from 'styled-components';
import './collapsibleNavStyles.css';
import { TimelineLite, Power4 } from 'gsap';

const MenuWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.menu = null;
    this.menuBg1 = null;
    this.menuBg2 = null;
    this.menuBg3 = null;
    this.menuTween = new TimelineLite({ paused: true });
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  keyDownHandler = e => {
    if (e.keyCode === 27) this.props.close();
  };

  componentDidMount() {
    this.menuTween
      .from(this.menu, 0, { autoAlpha: 0 })
      .from(
        this.menuBg1,
        0.8,
        {
          y: -100,
          ease: Power4.easeInOut
        },
        0
      )
      .from(
        this.menuBg2,
        0.8,
        {
          scaleY: 0,
          ease: Power4.easeInOut,
          transformOrigin: 'center'
        },
        0
      )
      .from(
        this.menuBg3,
        0.8,
        {
          y: 100,
          ease: Power4.easeInOut
        },
        0
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
            y="-20"
            width="200"
            height="200"
            transform="rotate(-45)"
            fill="#45c7c1"
          />
          <polygon
            id="menu-bg-1"
            ref={polygon => (this.menuBg1 = polygon)}
            points="0,0 100,0 100,15 0,45"
            fill="#e1487a"
          />
          <polygon
            id="menu-bg-3"
            ref={polygon => (this.menuBg3 = polygon)}
            points="0,85 100,55 100,100 0,100"
            fill="#e9b533"
          />
        </svg>
        <div
          className="modal-dialog"
          ref={div => (this.modalDialog = div)}
          onClick={event => event.stopPropagation()}
        />
      </MenuWrapper>
    );
  }
}

export default Menu;
