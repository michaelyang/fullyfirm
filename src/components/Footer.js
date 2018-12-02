import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Footer = () => (
  <FooterWrapper>
    <p>Posted by: Hege Refsnes</p>
    <p>
      Contact information:{" "}
      <a href="mailto:someone@example.com">someone@example.com</a>.
    </p>
  </FooterWrapper>
);

export default Footer;
