import React, { forwardRef, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

interface ImageSequenceProps {
  sceneInfo: SceneInfoProps;
  // triggerRef?: HTMLDivElement | null;
  triggerRef: string;
  isCurrentScene: boolean;
}

interface SceneInfoProps {
  sceneIndex: number;
  type: string;
  scene: string;
  scrollHeight: number;
  initialNumber: number;
  totalImagesCount: number;
  prevScrollHeight: number;
}
[];

const NewSequnce = ({
  sceneInfo,
  triggerRef,
  isCurrentScene,
}: ImageSequenceProps) => {
  const didEffect = useRef(false);
  const imageViewer = useRef<HTMLCanvasElement>(null);
  const imageScene = useRef(null);

  useEffect(() => {
    // prevent duplicating pin spacer
    if (didEffect.current) return;
    didEffect.current = true;

    const pagesElement = imageScene?.current;
    if (!pagesElement) return;

    const pagesWrapperElement = imageViewer?.current;
    if (!pagesWrapperElement) return;

    const canvas = imageViewer.current;
    if (canvas == null) return;

    const context = canvas?.getContext('2d');
    if (context == null) return;

    const currentFrame = (index: number) =>
      `png/${sceneInfo.scene}/${sceneInfo.scene}_${(
        sceneInfo.initialNumber + index
      )
        .toString()
        .padStart(5, '0')}.png`;

    const images: HTMLImageElement[] = [];
    const initialFrame = {
      frame: 0,
    };

    for (let i = 0; i < sceneInfo.totalImagesCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
      img.onload = function () {
        const inW = img.width;
        const inH = img.height;

        canvas.width = inW;
        canvas.height = inH;
      };
    }

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[initialFrame.frame], 0, 0);
    };

    gsap.to(initialFrame, {
      frame: sceneInfo.totalImagesCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef, // 이건 트리거 필요할때 활성화
        scrub: 0.5,
        start: 'top top',
        end: 'bottom top',
      },
      onUpdate: render,
    });

    images[0].onload = render;
  }, []);

  return (
    <ImageWrapper
      ref={imageScene}
      wrapperHeight={sceneInfo.totalImagesCount * 20}
      currentScene={isCurrentScene}
    >
      <Canvas ref={imageViewer}></Canvas>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div<{
  wrapperHeight: number;
  currentScene: boolean;
}>`
  height: ${({ wrapperHeight }) => `${wrapperHeight}px`};
  position: relative;
  visibility: ${({ currentScene }) => (currentScene ? 'visible' : 'hidden')};
`;

const Canvas = styled.canvas`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
`;

export default NewSequnce;
