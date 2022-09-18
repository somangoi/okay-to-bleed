import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      &copy; 2022, Okay to bleed
      <LinkContainer>
        <Link to="/">
          <small>Home</small>
        </Link>
        <Link to="/contact">
          <small>Contact</small>
        </Link>
        <Link to="/support">
          <small>Support girls</small>
        </Link>
      </LinkContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: absolute;
  left: 0;
  padding: 3rem 1.5rem;
`;

const LinkContainer = styled.div`
  margin-top: 1rem;

  a {
    color: #fff;
    margin-right: 1rem;
  }

  a:hover,
  a:active {
    color: #fff;
  }

  a:last-child {
    margin-right: 0;
  }
`;

export default Footer;
