import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

const LayoutWrapper = styled.div`
  padding: 0 5rem 5rem 5rem;
`;
const ContentWrapper = styled.div`
  padding: 0 5% 0 5%;
  min-height: fill-available;
`;

const TemplateWrapper = ({ children }) => (
  <LayoutWrapper>
    <Helmet title="Fully Firm" />
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </LayoutWrapper>
);

export default TemplateWrapper;
