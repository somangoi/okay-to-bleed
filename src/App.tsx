import './App.css';
import { Outlet, Link } from 'react-router-dom';
import {
  HomeRounded,
  ContactSupportRounded,
  VolunteerActivismRounded,
} from '@mui/icons-material';
import '../src/config/i18n/i18n';
import RouteChangeTracker from './config/ga/RouteChangeTracker';
import { ScrollToTopButton } from './components/button/ScrollToTopButton';
import ChapterMenu from './components/ChapterMenu';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

function App() {
  RouteChangeTracker();
  const { t } = useTranslation('Common');

  return (
    <div className="App">
      <h1>Okay to bleed</h1>
      <nav>
        <Link to="/">
          <Tooltip title={t('home')}>
            <IconButton>
              <HomeRounded />
            </IconButton>
          </Tooltip>
        </Link>
        <Tooltip title={t('chapters')}>
          <ChapterMenu></ChapterMenu>
        </Tooltip>
        <Link to="/contact">
          <Tooltip title={t('contact')}>
            <IconButton>
              <ContactSupportRounded />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to="/support">
          <Tooltip title={t('support')}>
            <IconButton>
              <VolunteerActivismRounded />
            </IconButton>
          </Tooltip>
        </Link>
      </nav>
      <Outlet />
      <footer>
        <small>&copy; 2022, Okay to bleed</small>
        <div>
          <Link to="/">
            <small>Home</small>
          </Link>
          <Link to="/contact">
            <small>Contact</small>
          </Link>
          <Link to="/support">
            <small>Support girls</small>
          </Link>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
