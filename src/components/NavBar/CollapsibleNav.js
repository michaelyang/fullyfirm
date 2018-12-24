import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import './collapsibleNavStyles.css';
import { TimelineMax, Power4 } from 'gsap/all';

class CollapsibleNav extends React.Component {
  constructor(props) {
    super(props);
    this.openTrigger = null;
    this.openTriggerTop = null;
    this.openTriggerMiddle = null;
    this.openTriggerBottom = null;
    this.closeTrigger = null;
    this.closeTriggerLeft = null;
    this.closeTriggerRight = null;
    this.menuContainer = null;
    this.menu = null;
    this.menuTop = null;
    this.menuMiddle = null;
    this.menuBottom = null;
    this.tlOpen = new TimelineMax({ paused: true });
    this.tlClose = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.tlOpen
      .add('preOpen')
      .to(
        this.openTriggerTop,
        0.4,
        {
          x: '+80px',
          y: '-80px',
          delay: 0.1,
          ease: Power4.easeIn,
          onComplete: function() {
            this.closeTrigger.style.zIndex = '25';
          },
          onCompleteScope: this
        },
        'preOpen'
      )
      .to(
        this.openTriggerMiddle,
        0.4,
        {
          x: '+=80px',
          y: '-=80px',
          ease: Power4.easeIn,
          onComplete: function() {
            this.openTrigger.style.visibility = 'hidden';
          },
          onCompleteScope: this
        },
        'preOpen'
      )
      .to(
        this.openTriggerBottom,
        0.4,
        {
          x: '+=80px',
          y: '-=80px',
          delay: 0.2,
          ease: Power4.easeIn
        },
        'preOpen'
      )
      .add('open', '-=0.4')
      .to(
        this.menuTop,
        0.8,
        {
          y: '13%',
          ease: Power4.easeInOut
        },
        'open'
      )
      .to(
        this.menuMiddle,
        0.8,
        {
          scaleY: 1,
          ease: Power4.easeInOut
        },
        'open'
      )
      .to(
        this.menuBottom,
        0.8,
        {
          y: '-114%',
          ease: Power4.easeInOut
        },
        'open'
      )
      .fromTo(
        this.menu,
        0.6,
        {
          y: 30,
          opacity: 0,
          visibility: 'hidden'
        },
        {
          y: 0,
          opacity: 1,
          visibility: 'visible',
          ease: Power4.easeOut
        },
        '-=0.2'
      )
      .add('preClose', '-=0.8')
      .to(
        this.closeTriggerLeft,
        0.8,
        {
          x: '-=100px',
          y: '+=100px',
          ease: Power4.easeOut
        },
        'preClose'
      )
      .to(
        this.closeTriggerRight,
        0.8,
        {
          x: '+=100px',
          y: '+=100px',
          delay: 0.2,
          ease: Power4.easeOut
        },
        'preClose'
      );

    //CLOSE TIMELINE
    this.tlClose
      .add('close')
      .to(
        this.menuTop,
        0.2,
        {
          backgroundColor: '#6295ca',
          ease: Power4.easeInOut,
          onComplete: function() {
            this.closeTrigger.style.zIndex = '5';
            this.openTrigger.style.visibility = 'visible';
          },
          onCompleteScope: this
        },
        'close'
      )
      .to(
        this.menuMiddle,
        0.2,
        {
          backgroundColor: '#6295ca',
          ease: Power4.easeInOut
        },
        'close'
      )
      .to(
        this.menuBottom,
        0.2,
        {
          backgroundColor: '#6295ca',
          ease: Power4.easeInOut
        },
        'close'
      )
      .to(
        this.menu,
        0.6,
        {
          y: 20,
          opacity: 0,
          ease: Power4.easeOut,
          onComplete: function() {
            this.menu.style.visibility = 'hidden';
          },
          onCompleteScope: this
        },
        'close'
      )
      .to(
        this.menuTop,
        0.8,
        {
          y: '-113%',
          ease: Power4.easeInOut
        },
        'close',
        '+=0.2'
      )
      .to(
        this.menuMiddle,
        0.8,
        {
          scaleY: 0,
          ease: Power4.easeInOut
        },
        'close',
        '+=0.2'
      )
      .to(
        this.menuBottom,
        0.8,
        {
          y: '23%',
          ease: Power4.easeInOut,
          onComplete: function() {
            this.menuTop.style.backgroundColor = '#e1487a';
            this.menuMiddle.style.backgroundColor = '#45c7c1';
            this.menuBottom.style.backgroundColor = '#e9b533';
          },
          onCompleteScope: this
        },
        'close',
        '+=0.2'
      )
      .to(
        this.closeTriggerLeft,
        0.2,
        {
          x: '+=100px',
          y: '-=100px',
          ease: Power4.easeIn
        },
        'close'
      )
      .to(
        this.closeTriggerRight,
        0.2,
        {
          x: '-=100px',
          y: '-=100px',
          delay: 0.1,
          ease: Power4.easeIn
        },
        'close'
      )
      .to(
        this.openTriggerTop,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          delay: 0.2,
          ease: Power4.easeOut
        },
        'close'
      )
      .to(
        this.openTriggerMiddle,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          ease: Power4.easeOut
        },
        'close'
      )
      .to(
        this.openTriggerBottom,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          delay: 0.1,
          ease: Power4.easeOut
        },
        'close'
      );
  }

  render() {
    const open = () => {
      if (this.tlOpen.progress() < 0) {
        this.tlOpen.play();
      } else {
        this.tlOpen.restart();
      }
    };

    const close = () => {
      if (this.tlClose.progress() < 0.1) {
        this.tlClose.play();
      } else {
        this.tlClose.restart();
      }
    };

    return (
      <div className="collapsibleNavContainer">
        <span
          className="menu-trigger"
          ref={span => (this.openTrigger = span)}
          onClick={open}>
          <i
            className="menu-trigger-bar top"
            ref={i => (this.openTriggerTop = i)}
          />
          <i
            className="menu-trigger-bar middle"
            ref={i => (this.openTriggerMiddle = i)}
          />
          <i
            className="menu-trigger-bar bottom"
            ref={i => (this.openTriggerBottom = i)}
          />
        </span>
        <span
          className="close-trigger"
          ref={span => (this.closeTrigger = span)}
          onClick={close}>
          <i
            className="close-trigger-bar left"
            ref={i => (this.closeTriggerLeft = i)}
          />
          <i
            className="close-trigger-bar right"
            ref={i => (this.closeTriggerRight = i)}
          />
        </span>
        <div className="inner-container">
          <i className="menu-bg top" ref={i => (this.menuTop = i)} />
          <i className="menu-bg middle" ref={i => (this.menuMiddle = i)} />
          <i className="menu-bg bottom" ref={i => (this.menuBottom = i)} />
          <div
            className="menu-container"
            ref={div => (this.menuContainer = div)}>
            <ul className="menu" ref={ul => (this.menu = ul)}>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Create account</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CollapsibleNav;
