// @ts-nocheck
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
import { CircularProgress, Box } from '@mui/material';

type Props = {
  id: string;
  animationSrc: string;
  virtualHeight: string;
  stopOffset?: number;
  maxFrame: number;
};

function AnimationFrame(props: Props) {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [visible, setVisible] = React.useState<boolean>(false);
  const observerRef = React.useRef<IntersectionObserver>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const wrapperId = props.id + '-wrapper';
  const lottieId = props.id;
  const stopOffset = props.stopOffset || 0;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    wrapperRef.current && observerRef.current.observe(wrapperRef.current);
  }, []);

  useEffect(() => {
    if (visible) {
      lottieRef.current?.addEventListener('load', function (e) {
        create({
          mode: 'scroll',
          player: '#' + lottieId,
          container: '#' + wrapperId,
          actions: [
            {
              visibility: [0, stopOffset],
              type: 'stop',
              frames: [0],
            },
            {
              visibility: [stopOffset, 1.0],
              type: 'seek',
              frames: [0, props.maxFrame],
            },
          ],
        });
      });
      lottieRef.current?.addEventListener('ready', function (e) {
        setLoading(false);
      });
    }
  }, [visible]);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setVisible(true);
      }
    });
  };

  return (
    <Wrapper
      id={wrapperId}
      ref={wrapperRef}
      virtualHeight={props.virtualHeight}
      className="animation_wrapper"
    >
      <Lottie>
        {loading && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <CircularProgress size={60} sx={{ color: '#fff' }} />
          </Box>
        )}
        {visible && (
          <lottie-player
            id={lottieId}
            ref={lottieRef}
            src={props.animationSrc}
            mode="normal"
          ></lottie-player>
        )}
      </Lottie>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ virtualHeight: string }>`
  height: ${({ virtualHeight }) => virtualHeight || '100vh'};
`;

const Lottie = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 100vh;
`;

export default React.memo(AnimationFrame);
