import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import '@lottiefiles/lottie-player';
import { CircularProgress, Box } from '@mui/material';
interface ImageSequenceProps {
  sceneInfo: SceneInfoProps;
  triggerRef: string;
  isCurrentScene: boolean;
  loadTriggerRef: React.RefObject<HTMLDivElement>;
}

interface SceneInfoProps {
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
  loadTriggerRef,
}: ImageSequenceProps) => {
  const didEffectRef = useRef(false);
  const imageViewerRef = useRef<HTMLCanvasElement>(null);
  const imageSceneRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoadingImages, setIsLoadingImages] = useState<boolean>(true);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    loadTriggerRef.current &&
      observerRef.current.observe(loadTriggerRef.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // prevent duplicating pin spacer
      if (didEffectRef.current) return;
      didEffectRef.current = true;

      const pagesElement = imageSceneRef?.current;
      if (!pagesElement) return;

      const pagesWrapperElement = imageViewerRef?.current;
      if (!pagesWrapperElement) return;

      const canvas = imageViewerRef.current;
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

      let loadedImageCount = 0;

      for (let i = 0; i < sceneInfo.totalImagesCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
        img.onload = function () {
          const inW = img.width;
          const inH = img.height;
          loadedImageCount++;
          canvas.width = inW;
          canvas.height = inH;
          if (loadedImageCount + 1 === sceneInfo.totalImagesCount) {
            setIsLoadingImages(false);
          }
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
          trigger: triggerRef,
          scrub: 0.5,
          start: 'top top',
          end: 'bottom top',
        },
        onUpdate: render,
      });

      images[0].onload = render;
    }
  }, [isVisible]);

  return (
    <>
      {isLoadingImages && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          position="fixed"
          left="calc(50% - 30px)"
        >
          <CircularProgress size={60} sx={{ color: '#fff' }} />
        </Box>
      )}
      <ImageWrapper
        ref={imageSceneRef}
        wrapperHeight={sceneInfo.totalImagesCount * 20}
        currentScene={isCurrentScene}
      >
        <Canvas
          ref={imageViewerRef}
          isVisible={isVisible && isCurrentScene}
        ></Canvas>
      </ImageWrapper>
    </>
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

const Canvas = styled.canvas<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
`;

export default NewSequnce;
