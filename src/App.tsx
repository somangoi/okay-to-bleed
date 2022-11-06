import './App.css';
import { Outlet, Link } from 'react-router-dom';
import '../src/config/i18n/i18n';
import RouteChangeTracker from './config/ga/RouteChangeTracker';
import { ScrollToTopButton } from './components/button/ScrollToTopButton';
import Navigation from './components/nav/Navigation';

function App() {
  RouteChangeTracker();

  return (
    <div className="App">
      <Navigation />
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
