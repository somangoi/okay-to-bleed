import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import lottie, { AnimationItem } from 'lottie-web';
import { useScroll } from 'framer-motion';

type Props = {
  virtualHeight: string;
  animData: any;
};

function GrowUpAnim(props: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  let anim: AnimationItem;

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: props.animData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  const handleScroll = () => {
    const { scrollYProgress } = useScroll({
      target: wrapperRef,
      offset: ['end end', 'start start'],
    });
    const maxFrames = anim.totalFrames;
    const frame = (maxFrames / 100) * scrollYProgress.get();
    anim.goToAndStop(frame, true);
  };

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

export default GrowUpAnim;
