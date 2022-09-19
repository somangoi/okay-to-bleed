import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  HomeRounded,
  ContactSupportRounded,
  VolunteerActivismRounded,
} from '@mui/icons-material';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoText>Okay to bleed</HeaderLogoText>
      <HeaderLinkContainer>
        <Link to="/">
          <HomeRounded />
        </Link>
        <Link to="/contact">
          <ContactSupportRounded />
        </Link>
        <Link to="/support">
          <VolunteerActivismRounded />
        </Link>
      </HeaderLinkContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 100;
`;

const HeaderLogoText = styled.h1`
  font-size: 1.2rem;
  color: white;
  margin: 0;
  font-weight: 400;
  z-index: 100;
`;

const HeaderLinkContainer = styled.div`
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

export default Header;
