import React, { Component } from 'react';
import styled from 'styled-components';
import './collapsibleNavStyles.css';
import { TimelineLite, CSSPlugin } from 'gsap/all';

const MenuWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.modalWrap = null;
    this.modalDialog = null;
    this.modalTween = new TimelineLite({ paused: true });
    this.keyDownHandler = this.keyDownHandler.bind(this);
  }

  keyDownHandler = e => {
    if (e.keyCode == 27) this.props.close();
  };

  componentDidMount() {
    this.modalTween
      .to(this.modalWrap, 0.01, { autoAlpha: 1 })
      .to(this.modalDialog, 0.25, { y: 50, autoAlpha: 1 }, 0)
      .reversed(true)
      .paused(false);
  }

  componentDidUpdate() {
    if (this.props.visible) {
      window.addEventListener('keydown', this.keyDownHandler);
    } else {
      window.removeEventListener('keydown', this.keyDownHandler);
    }
    this.modalTween.reversed(!this.props.visible);
  }

  render() {
    return (
      <MenuWrapper
        ref={div => (this.modalWrap = div)}
        onClick={this.props.close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <polygon points="0,0 100,0 100,20 0,40" fill="#e1487a" />
          <polygon points="0,40 100,20 100,60 0,80" fill="#45c7c1" />
          <polygon points="0,80 100,60 100,100 0,100" fill="#e9b533" />
        </svg>
        <div
          className="modal-dialog"
          ref={div => (this.modalDialog = div)}
          onClick={event => event.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h4>A Simple Modal Tween</h4>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                velit provident sunt iusto ratione dolore veritatis deserunt
                ullam vel doloribus.
              </p>
            </div>
          </div>
        </div>
      </MenuWrapper>
    );
  }
}

export default Menu;
