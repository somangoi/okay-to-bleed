import './App.css';
import './styles/reset.css';
import { Outlet } from 'react-router-dom';
import '../src/config/i18n/i18n';
import RouteChangeTracker from './config/ga/RouteChangeTracker';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';
import { ScrollToTopButton } from './components/button/ScrollToTopButton';

function App() {
  RouteChangeTracker();

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
