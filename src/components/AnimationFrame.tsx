import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import lottie, { AnimationItem } from 'lottie-web';
import { useScroll } from 'framer-motion';

type Props = {
  virtualHeight: string;
  animData: any;
};

function AnimationFrame(props: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start', 'end'],
  });
  let anim: AnimationItem;

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: props.animData,
    });
  }, []);

  let startFrame = 0;
  function handleScroll() {
    const maxFrames = anim.totalFrames;
    const endFrame = Math.floor(maxFrames * scrollYProgress.get());
    anim.playSegments([startFrame, endFrame], true);
    console.log(startFrame, endFrame);
    startFrame = endFrame;
  }

  return (
    <Wrapper
      onTouchMove={handleScroll}
      onWheel={handleScroll}
      ref={wrapperRef}
      virtualHeight={props.virtualHeight}
    >
      <Lottie ref={lottieRef}></Lottie>
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
