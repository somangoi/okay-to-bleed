import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useScroll } from '../hooks/customHooks';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import NewSequnce from '../components/animation/NewSequnce';
import PeriodFAQ from './PeriodFAQ';
import Title from '../components/Title';
import SubtitleBox from '../components/subtitle/SubtitleBox';
import Ch1SubtitlesData from '../config/i18n/en/Ch1Subtitles.json';

const sceneInfo = [
  {
    scene: 'Intro',
    scrollHeight: 0,
    initialNumber: 0,
    totalImagesCount: 379,
    prevScrollHeight: 0,
  },
  {
    scene: 'Chapter1-1',
    scrollHeight: 0,
    initialNumber: 379,
    totalImagesCount: 369,
    prevScrollHeight: 0,
  },
  {
    scene: 'Chapter1-2',
    scrollHeight: 0,
    initialNumber: 748,
    totalImagesCount: 386,
    prevScrollHeight: 0,
  },
];

const ScrollPeriod = () => {
  const { t } = useTranslation('Period');
  const { scrollY } = useScroll();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const introLoadTriggerRef = useRef<HTMLDivElement>(null);
  const ch1_1LoadTriggerRef = useRef<HTMLDivElement>(null);
  const ch1_2LoadTriggerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
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
      <Title text={t('title')} />
      <LoadTrigger ref={introLoadTriggerRef} />
      <SceneWrapper id="intro">
        <NewSequnce
          sceneInfo={sceneInfo[0]}
          triggerRef={'#intro'}
          isCurrentScene={currentSceneIndex === 0}
          loadTriggerRef={introLoadTriggerRef}
        />
      </SceneWrapper>
      <LoadTrigger ref={ch1_1LoadTriggerRef} />
      <SceneWrapper id="chapter1_1">
        <NewSequnce
          sceneInfo={sceneInfo[1]}
          triggerRef={'#chapter1_1'}
          isCurrentScene={currentSceneIndex === 1}
          loadTriggerRef={ch1_1LoadTriggerRef}
        />
      </SceneWrapper>
      <LoadTrigger ref={ch1_2LoadTriggerRef} />
      <SceneWrapper id="chapter1_2">
        <NewSequnce
          sceneInfo={sceneInfo[2]}
          triggerRef={'#chapter1_2'}
          isCurrentScene={currentSceneIndex === 2}
          loadTriggerRef={ch1_2LoadTriggerRef}
        />
      </SceneWrapper>
      <SceneWrapper>
        <PeriodFAQ />
      </SceneWrapper>
      <SubtitleBox
        subtitlesName="Ch1Subtitles"
        subtitlesData={Ch1SubtitlesData}
      />
    </Main>
  );
};

const Main = styled.main``;

// 뷰 포인트 전에 json파일을 미리 로드하는 지점
const LoadTrigger = styled.div`
  height: 200vh;
  margin-top: -200vh;
  z-index: -99;
`;

const SceneWrapper = styled.div`
  &:last-child {
    padding: 100vh 0 10vh 0;
  }
`;

export default ScrollPeriod;
