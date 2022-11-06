import {
  ContactSupportRounded,
  HomeRounded,
  VolunteerActivismRounded,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChapterMenu from '../ChapterMenu';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <WebsiteTitle
        onClick={() => {
          scrollTo(0, 0);
          navigate('/');
        }}
      >
        Okay to bleed
      </WebsiteTitle>
      <MenuButtonContainer>
        <Link to="/">
          <IconButton>
            <HomeRounded fontSize="small" />
          </IconButton>
        </Link>
        <ChapterMenu></ChapterMenu>
        <Link to="/contact">
          <IconButton>
            <ContactSupportRounded fontSize="small" />
          </IconButton>
        </Link>
        <Link to="/support">
          <IconButton>
            <VolunteerActivismRounded fontSize="small" />
          </IconButton>
        </Link>
      </MenuButtonContainer>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  padding: 1.5rem !important;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #fff !important;
  }

  @media (max-width: 600px) {
    padding: 1rem !important;
  }
`;

const WebsiteTitle = styled.h1`
  font-size: 1.2rem;
  color: white;
  margin: 0;
  font-weight: 400;
`;

const MenuButtonContainer = styled.div``;

export default Navigation;
