import React, { Suspense, lazy } from 'react';
import App from './App';
import './index.css';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';

const TRACKING_ID = import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

ReactGA.initialize(TRACKING_ID!);

const Period = lazy(() => import('./pages/Period'));
const Team = lazy(() => import('./pages/Team'));
const Support = lazy(() => import('./pages/Support'));
const Error = lazy(() => import('./pages/Error'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <LinearProgress
            sx={{ position: 'absolute', left: 0, width: '100vw' }}
          />
        }
      >
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Period chapter={1} />} />
            <Route path="/chapter1" element={<Navigate to="/" />} />
            <Route path="/chapter2" element={<Period chapter={2} />} />
            <Route path="/chapter3" element={<Period chapter={3} />} />
            <Route path="/chapter4" element={<Period chapter={4} />} />
            <Route path="team" element={<Team />} />
            <Route path="support" element={<Support />} />
            <Route path="*" element={<Error errorCode={404} />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
