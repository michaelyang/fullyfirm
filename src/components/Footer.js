import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  min-height: 5rem;
  background-color: var(--ff-black);
  @media (max-width: 768px) {
    min-height: 5rem;
  }
  p {
    color: var(--ff-beige);
    text-align: right;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>Michael Yang</p>
  </FooterWrapper>
);

export default Footer;
