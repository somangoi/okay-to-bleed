import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

type Props = {
  id: string;
  animationSrc: string;
  virtualHeight: string;
  stopOffset?: number;
  maxFrame: number;
};

function AnimationFrame(props: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const wrapperId = props.id + '-wrapper';
  const lottieId = props.id;
  const stopOffset = props.stopOffset || 0;

  useEffect(() => {
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
  }, []);

  return (
    <Wrapper
      id={wrapperId}
      ref={wrapperRef}
      virtualHeight={props.virtualHeight}
    >
      <Lottie>
        <lottie-player
          id={lottieId}
          ref={lottieRef}
          src={props.animationSrc}
          mode="normal"
        ></lottie-player>
      </Lottie>
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<Props, 'virtualHeight'>>`
  height: ${props => props.virtualHeight || '100vh'};
`;

const Lottie = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 100vh;
`;

export default AnimationFrame;
