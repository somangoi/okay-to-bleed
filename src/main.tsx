import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Period from "./routes/period";
import Contact from "./routes/contact";
import Support from "./routes/support";
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="period" element={<Period />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<Support />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page 404: There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
