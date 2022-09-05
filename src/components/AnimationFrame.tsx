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
  const [animationUrl, setAnimationUrl] = React.useState<string>();
  const observerRef = React.useRef<IntersectionObserver>();
  const loadTriggerRef = React.useRef<HTMLDivElement>(null);
  const lottieRef = React.useRef<HTMLDivElement>(null);
  const wrapperId = props.id + '-wrapper';
  const lottieId = props.id;
  const stopOffset = props.stopOffset || 0;
  const animationSrc = props.animationSrc;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    loadTriggerRef.current &&
      observerRef.current.observe(loadTriggerRef.current);
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
        import('../anim/1_1.json?url').then(value => {
          setAnimationUrl(value.default);
          setVisible(true);
        });
      }
    });
  };

  return (
    <div>
      <LoadTrigger ref={loadTriggerRef} />
      <Wrapper
        id={wrapperId}
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
              src={animationUrl}
              mode="normal"
            ></lottie-player>
          )}
        </Lottie>
      </Wrapper>
    </div>
  );
}

// 뷰 포인트 전에 json파일을 미리 로드하는 지점
const LoadTrigger = styled.div`
  height: 200vh;
  margin-top: -200vh;
  z-index: -99;
`;

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
