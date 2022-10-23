import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';
import { useScroll } from '../hooks/customHooks';
import NewSequnce from '../components/animation/NewSequnce';
import PeriodFAQ from './PeriodFAQ';

const sceneInfo = [
  {
    sceneIndex: 0,
    type: 'animation',
    scene: 'Intro',
    scrollHeight: 0,
    initialNumber: 0,
    totalImagesCount: 379,
    prevScrollHeight: 0,
  },
  {
    sceneIndex: 1,
    type: 'animation',
    scene: 'Chapter1-1',
    scrollHeight: 0,
    initialNumber: 379,
    totalImagesCount: 369,
    prevScrollHeight: 0,
  },
  {
    sceneIndex: 2,
    type: 'animation',
    scene: 'Chapter1-2',
    scrollHeight: 0,
    initialNumber: 748,
    totalImagesCount: 386,
    prevScrollHeight: 0,
  },
];

const ScrollPeriod = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { scrollY } = useScroll();

  const introRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  let prevScrollHeight = 0;

  useEffect(() => {
    prevScrollHeight = 0;
    for (let i = 0; i < currentSceneIndex; i++) {
      prevScrollHeight += sceneInfo[i]?.scrollHeight;
    }

    if (
      scrollY >
      prevScrollHeight + sceneInfo[currentSceneIndex]?.scrollHeight
    ) {
      setCurrentSceneIndex(currentSceneIndex + 1);
    }
    if (scrollY < prevScrollHeight) {
      if (currentSceneIndex === 0) return;
      setCurrentSceneIndex(currentSceneIndex - 1);
    }
  }, [scrollY]);

  useEffect(() => {
    const setScrollHeight = () => {
      for (let i = 0; i < sceneInfo.length; i++) {
        sceneInfo[i].scrollHeight = sceneInfo[i].totalImagesCount * 20;
      }

      // 새로고침시, current scene index 리셋
      let totalScrollHeight = 0;
      for (let i = 0; i < sceneInfo.length; i++) {
        totalScrollHeight += sceneInfo[i].scrollHeight;
        if (totalScrollHeight >= window.scrollY) {
          setCurrentSceneIndex(i);
          break;
        }
      }
    };

    setScrollHeight();
  }, []);

  return (
    <Main>
      <SceneWrapper ref={introRef} id="intro">
        <NewSequnce
          sceneInfo={sceneInfo[0]}
          triggerRef={'#intro'}
          isCurrentScene={currentSceneIndex === 0}
        />
      </SceneWrapper>
      <SceneWrapper ref={firstRef} id="first">
        <NewSequnce
          sceneInfo={sceneInfo[1]}
          triggerRef={'#first'}
          isCurrentScene={currentSceneIndex === 1}
        />
      </SceneWrapper>
      <SceneWrapper ref={secondRef} id="second">
        <NewSequnce
          sceneInfo={sceneInfo[2]}
          triggerRef={'#second'}
          isCurrentScene={currentSceneIndex === 2}
        />
      </SceneWrapper>
      <SceneWrapper>
        <PeriodFAQ />
      </SceneWrapper>
    </Main>
  );
};

const Main = styled.main``;

const SceneWrapper = styled.div`
  &:last-child {
    padding: 100vh 0 10vh 0;
  }
`;

export default ScrollPeriod;
