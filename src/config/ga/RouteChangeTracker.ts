import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

function RouteChangeTracker() {
  const location = useLocation();
  const [initialized, setInitialized] = useState<Boolean>(false);

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(
        import.meta.env.VITE_REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID!,
      );
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
}

export default RouteChangeTracker;
