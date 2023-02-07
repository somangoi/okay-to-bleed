import {
  HomeRounded,
  VolunteerActivismRounded,
  InfoRounded,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChapterMenu from '../ChapterMenu';
import LanguageMenu from '../menu/LanguageMenu';

const Navigation = ({ showNav }: any) => {
  const navigate = useNavigate();

  return (
    <NavContainer showNav={showNav}>
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
        <Link to="/about">
          <IconButton>
            <InfoRounded fontSize="small" />
          </IconButton>
        </Link>
        <Link to="/support">
          <IconButton>
            <VolunteerActivismRounded fontSize="small" />
          </IconButton>
        </Link>
        <LanguageMenu />
      </MenuButtonContainer>
    </NavContainer>
  );
};

const NavContainer = styled.nav<{ showNav: boolean }>`
  padding: 1.5rem !important;
  position: fixed;
  top: ${({ showNav }) => (showNav ? '0 ' : '-80px')};
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s linear;

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
  cursor: pointer;
`;

const MenuButtonContainer = styled.div``;

export default Navigation;
