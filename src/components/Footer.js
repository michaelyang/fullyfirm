import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Footer = () => (
  <FooterWrapper>
    <p>Posted by: Dangey Mikey</p>
    <p>
      Contact information:{" "}
      <a href="mailto:dangeymikey@example.com">dangeymikey@example.com</a>.
    </p>
  </FooterWrapper>
);

export default Footer;
