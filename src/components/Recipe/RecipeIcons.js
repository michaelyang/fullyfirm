import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  &:nth-child(5n + 1) {
    background-color: var(--ff-pink);
  }
  &:nth-child(5n + 2) {
    background-color: var(--ff-blue);
  }
  &:nth-child(5n + 3) {
    background-color: var(--ff-beige);
  }
  &:nth-child(5n + 4) {
    background-color: var(--ff-yellow);
  }
  &:nth-child(5n + 5) {
    background-color: var(--ff-grey);
  }
  span {
    padding: 0 0.5rem;
    flex: 2;
    white-space: nowrap;
    align-self: center;
    text-align: center;
    font-size: 2.4rem;
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }
`;
const IconWithLabel = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: center;
  padding: 1rem 0.5rem;
  span {
    align-self: center;
    font-size: 1.4rem;
    text-align: center;
  }
  svg {
    align-self: center;
  }
`;
const PersonIcon = ({ width, height, fill, value }) => (
  <IconWrapper>
    <IconWithLabel>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 24 24">
        <path
          fill={fill}
          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
        />
      </svg>
      <span>Serves</span>
    </IconWithLabel>
    <span>{value}</span>
  </IconWrapper>
);

const PrepTimerIcon = ({ width, height, fill, value }) => (
  <IconWrapper>
    <IconWithLabel>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 24 24">
        <path
          fill={fill}
          d="M11,17A1,1 0 0,0 12,18A1,1 0 0,0 13,17A1,1 0 0,0 12,16A1,1 0 0,0 11,17M11,3V7H13V5.08C16.39,5.57 19,8.47 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12C5,10.32 5.59,8.78 6.58,7.58L12,13L13.41,11.59L6.61,4.79V4.81C4.42,6.45 3,9.05 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M18,12A1,1 0 0,0 17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12M6,12A1,1 0 0,0 7,13A1,1 0 0,0 8,12A1,1 0 0,0 7,11A1,1 0 0,0 6,12Z"
        />
      </svg>
      <span>Prep</span>
    </IconWithLabel>
    <span>{value}</span>
  </IconWrapper>
);

const ActiveTimerIcon = ({ width, height, fill, value }) => (
  <IconWrapper>
    <IconWithLabel>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 24 24">
        <path
          fill={fill}
          d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
        />
      </svg>
      <span>Active</span>
    </IconWithLabel>
    <span>{value}</span>
  </IconWrapper>
);

const FireIcon = ({ width, height, fill, value }) => (
  <IconWrapper>
    <IconWithLabel>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 24 24">
        <path
          fill={fill}
          d="M11.71,19C9.93,19 8.5,17.59 8.5,15.86C8.5,14.24 9.53,13.1 11.3,12.74C13.07,12.38 14.9,11.53 15.92,10.16C16.31,11.45 16.5,12.81 16.5,14.2C16.5,16.84 14.36,19 11.71,19M13.5,0.67C13.5,0.67 14.24,3.32 14.24,5.47C14.24,7.53 12.89,9.2 10.83,9.2C8.76,9.2 7.2,7.53 7.2,5.47L7.23,5.1C5.21,7.5 4,10.61 4,14A8,8 0 0,0 12,22A8,8 0 0,0 20,14C20,8.6 17.41,3.8 13.5,0.67Z"
        />
      </svg>
      <span>Difficulty</span>
    </IconWithLabel>
    <span>{value}</span>
  </IconWrapper>
);

const EarthIcon = ({ width, height, fill, value }) => (
  <IconWrapper>
    <IconWithLabel>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width={width}
        height={height}
        viewBox="0 0 24 24">
        <path
          fill={fill}
          d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
      <span>Cuisine</span>
    </IconWithLabel>
    <span>{value}</span>
  </IconWrapper>
);

export { PersonIcon, PrepTimerIcon, ActiveTimerIcon, FireIcon, EarthIcon };
