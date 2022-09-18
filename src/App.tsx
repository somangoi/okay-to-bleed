import './App.css';
import './styles/reset.css';
import { Outlet } from 'react-router-dom';
import '../src/config/i18n/i18n';
import RouteChangeTracker from './config/ga/RouteChangeTracker';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';

function App() {
  RouteChangeTracker();

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
