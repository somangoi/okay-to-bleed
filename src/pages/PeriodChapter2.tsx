import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Animation from '../components/animation/AnimationFrame';
import SubtitleBox from '../components/subtitle/SubtitleBox';
import Title from '../components/Title';
import PeriodFAQ from './PeriodFAQ';
import Ch1SubtitlesData from '../config/i18n/en/Ch1Subtitles.json';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../utils/customHooks';
import NextChapterButton from '../components/button/NextChapterButton';

const sceneInfo = [
  {
    sceneType: 'animation',
    id: 'lottie-2-1',
    animationSrc: '/anim/chapter2-1.json',
    maxFrame: 879,
    scrollHeight: 0,
  },
  {
    sceneType: 'faq',
    id: 'faq',
    maxFrame: 200,
    animationSrc: '',
    scrollHeight: 0,
  },
  {
    sceneType: 'animation',
    id: 'lottie-2-2',
    animationSrc: '/anim/chapter2-2.json',
    maxFrame: 150,
    scrollHeight: 0,
  },
  {
    sceneType: 'animation',
    id: 'lottie-2-3',
    animationSrc: '/anim/chapter2-3.json',
    maxFrame: 424,
    scrollHeight: 0,
  },
];

function PeriodChapter2() {
  const { t } = useTranslation('Period');
  const { scrollY } = useScroll();
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
        sceneInfo[i].scrollHeight = sceneInfo[i].maxFrame * 20;
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
    <main style={{ padding: '1rem 0' }}>
      <Title text={t('Chapter2-1Title')} />
      {sceneInfo.map((scene, index) => {
        switch (scene.sceneType) {
          case 'animation':
            return (
              <Animation
                id={scene.id}
                animationSrc={scene.animationSrc}
                virtualHeight={scene.scrollHeight}
                maxFrame={scene.maxFrame}
                currentScene={currentSceneIndex === index}
                key={scene.id}
              />
            );
          case 'faq':
            return (
              <PeriodFAQ
                virtualHeight={scene.scrollHeight}
                maxFrame={scene.maxFrame}
                currentScene={currentSceneIndex === index}
                key={scene.id}
              />
            );
        }
      })}
      <SubtitleBox
        subtitlesName="Ch1Subtitles"
        subtitlesData={Ch1SubtitlesData}
      />
      <NextChapterButton page={2} />
    </main>
  );
}

export default React.memo(PeriodChapter2);
