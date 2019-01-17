import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  height: 12rem;
  text-align: center;
`;
const TitleBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 12rem;
  margin-left: -50vw;
  left: 50%;
  z-index: -1;
  background-color: ${props => props.color};
`;

const Title = styled.h1`
  font-size: 3.6rem;
  color: white;
  line-height: 12rem;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const PageTitle = ({ title, color }) => (
  <TitleWrapper>
    <TitleBackground color={color} />
    <Title>{title}</Title>
  </TitleWrapper>
);

PageTitle.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};

export default PageTitle;
