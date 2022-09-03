import './App.css';
import { Outlet, Link } from 'react-router-dom';
import {
  HomeRounded,
  ContactSupportRounded,
  VolunteerActivismRounded,
} from '@mui/icons-material';
import '../src/config/i18n/i18n';
import RouteChangeTracker from './config/ga/RouteChangeTracker';

function App() {
  RouteChangeTracker();

  return (
    <div className="App">
      <h1>Okay to bleed</h1>
      <nav>
        <Link to="/">
          <HomeRounded />
        </Link>
        <Link to="/contact">
          <ContactSupportRounded />
        </Link>
        <Link to="/support">
          <VolunteerActivismRounded />
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
    </div>
  );
}

export default App;
