import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import './styles.css';
import favicon from '../img/logos/favicon.ico';
import favicon32 from '../img/logos/favicon-32x32.png';
import favicon16 from '../img/logos/favicon-16x16.png';
import appleTouchIcon from '../img/logos/apple-touch-icon.png';
import maskIcon from '../img/logos/safari-pinned-tab.svg';

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'main' 'footer';
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-areas: 'header' 'main' 'footer';
  }
`;

const ContentWrapper = styled.div`
  grid-area: main;
  z-index: 1;
  margin: 0 10% 0 10%;
  min-height: 100vh;
  @media (max-width: 768px) {
    margin: 0 2.5% 2.5% 2.5%;
  }
`;

const TemplateWrapper = ({ children }) => (
  <LayoutWrapper>
    <Helmet
      title="FullyFirm"
      meta={[
        { name: 'msapplication-TileColor', content: '#b91d47' },
        { name: 'theme-color', content: '#e1487a' }
      ]}
      link={[
        { rel: 'shortcut icon', href: `${favicon}` },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: `${appleTouchIcon}`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${favicon32}`
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${favicon16}`
        },
        {
          rel: 'manifest',
          href: `../img/icons/site.webmanifest`
        },
        {
          rel: 'mask-icon',
          color: '#e1487a',
          href: `${maskIcon}`
        }
      ]}
    />
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </LayoutWrapper>
);

export default TemplateWrapper;
