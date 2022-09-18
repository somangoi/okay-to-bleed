import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  const delay = 15;

  useEffect(() => {
    let mounted = true;
    window.addEventListener('scroll', () => {
      if (mounted) {
        setScrollY(window.pageYOffset);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
      window.removeEventListener('scroll', debounce(listener, delay));
    };
  }, []);

  return {
    scrollY,
  };
}
