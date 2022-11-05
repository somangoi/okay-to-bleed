import { LinearProgress } from '@mui/material';
import React, { Suspense, lazy } from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

const TRACKING_ID = import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

ReactGA.initialize(TRACKING_ID!);

const PeriodChapter1 = lazy(() => import('./pages/PeriodChapter1'));
const PeriodChapter2 = lazy(() => import('./pages/PeriodChapter2'));
const PeriodChapter3 = lazy(() => import('./pages/PeriodChapter3'));
const Contact = lazy(() => import('./pages/Contact'));
const Support = lazy(() => import('./pages/Support'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LinearProgress style={{ width: '100%' }} />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<PeriodChapter1 />} />
            <Route path="/chapter2" element={<PeriodChapter2 />} />
            <Route path="/chapter3" element={<PeriodChapter3 />} />
            <Route path="contact" element={<Contact />} />
            <Route path="support" element={<Support />} />
            <Route
              path="*"
              element={
                <main style={{ padding: '4rem 0px 0px' }}>
                  <p>
                    Page 404<br></br>There's nothing here!
                  </p>
                </main>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
