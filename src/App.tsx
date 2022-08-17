import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Okay to bleed!</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/period">About Period</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/support">Support Girls</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
