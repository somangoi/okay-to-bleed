import { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';

export const useLazyImageObserver = ({ src }: { src: string }) => {
  const observerRef = useRef<IntersectionObserver>();
  // const loadTriggerRef = useRef<HTMLDivElement>(null);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const imgContainerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            io.unobserve(entry.target);
            setImageSrc(src);
          }
        });
      },
    );

    imgContainerRef.current &&
      observerRef.current.observe(imgContainerRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
};

interface stateProps {
  image: HTMLImageElement | undefined;
  status: string;
}

const defaultState: stateProps = { image: undefined, status: 'loading' };
export const useImage = (url: string, crossOrigin?: string) => {
  const res = useState(defaultState);
  const image = res[0].image;
  const status = res[0].status;

  const setState = res[1];

  useEffect(() => {
    if (!url) return;
    const img = document.createElement('img');

    function onload() {
      setState({ image: img, status: 'loaded' });
    }

    function onerror() {
      setState({ image: undefined, status: 'failed' });
    }

    img.addEventListener('load', onload);
    img.addEventListener('error', onerror);
    crossOrigin && (img.crossOrigin = crossOrigin);
    img.src = url;

    return () => {
      img.removeEventListener('load', onload);
      img.removeEventListener('error', onerror);
      setState(defaultState);
    };
  }, [url, crossOrigin]);
  return [image, status];
};

export const useScroll = () => {
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
};
