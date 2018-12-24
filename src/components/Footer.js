import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  min-height: 15rem;
  background-color: var(--ff-black);
`;

const Footer = () => (
  <FooterWrapper>
    <p>Michael Yang</p>
  </FooterWrapper>
);

export default Footer;
