import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <small>&copy; 2022, Okay to bleed</small>
      <div>
        <Link to="/">
          <small>Home</small>
        </Link>
        <Link to="/about">
          <small>About</small>
        </Link>
        <Link to="/support">
          <small>Support girls</small>
        </Link>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  margin-top: 10rem;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default Footer;
