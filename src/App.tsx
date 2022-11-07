import './App.css';
import { Outlet, Link } from 'react-router-dom';
import '../src/config/i18n/i18n';
import RouteChangeTracker from './config/ga/RouteChangeTracker';
import { ScrollToTopButton } from './components/button/ScrollToTopButton';
import Navigation from './components/nav/Navigation';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  RouteChangeTracker();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className="App">
      <Navigation showNav={show} />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
