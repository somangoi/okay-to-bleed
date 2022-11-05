import React, { useEffect, useState } from 'react';
import Animation from '../components/animation/AnimationFrame';
import SubtitleBox from '../components/subtitle/SubtitleBox';
import Title from '../components/Title';
import Ch1SubtitlesData from '../config/i18n/en/Ch1Subtitles.json';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../utils/customHooks';
import SanitaryProducts from './SanitaryProducts';
import NextChapterButton from '../components/button/NextChapterButton';

const sceneInfo = [
  {
    sceneType: 'animation',
    id: 'lottie-3-1',
    animationSrc: '/anim/chapter3-1.json',
    maxFrame: 210,
    scrollHeight: 0,
  },
  {
    sceneType: 'animation',
    id: 'lottie-3-2',
    animationSrc: '/anim/chapter3-2.json',
    maxFrame: 149,
    scrollHeight: 0,
  },
  {
    sceneType: 'animation',
    id: 'lottie-3-3',
    animationSrc: '/anim/chapter3-3.json',
    maxFrame: 70,
    scrollHeight: 0,
  },
  {
    sceneType: 'animation',
    id: 'lottie-3-4',
    animationSrc: '/anim/chapter3-4.json',
    maxFrame: 180,
    scrollHeight: 0,
  },
  {
    sceneType: 'animation',
    id: 'lottie-3-5',
    animationSrc: '/anim/chapter3-5.json',
    maxFrame: 400,
    scrollHeight: 0,
  },
  {
    sceneType: 'sanitaryProducts',
    id: 'sanitary-products',
    maxFrame: 100,
    animationSrc: '',
    scrollHeight: 0,
  },
  {
    sceneType: 'animation',
    id: 'lottie-4-1',
    animationSrc: '/anim/chapter4-1.json',
    maxFrame: 105,
    scrollHeight: 0,
  },
  {
    sceneType: 'animation',
    id: 'lottie-4-2',
    animationSrc: '/anim/chapter4-2.json',
    maxFrame: 45,
    scrollHeight: 0,
  },
];

function PeriodChapter3() {
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
      <Title text={t('Chapter3-1Title')} />
      {sceneInfo.map((scene, index) => {
        switch (scene.sceneType) {
          case 'animation':
            return (
              <Animation
                id={scene.id}
                animationSrc={scene.animationSrc}
                virtualHeight={scene.scrollHeight}
                maxFrame={scene.maxFrame}
                // stopOffset={scene.stopOffset}
                currentScene={currentSceneIndex === index}
                key={scene.id}
              />
            );
          case 'sanitaryProducts':
            return (
              <SanitaryProducts
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
      <NextChapterButton page={'chapter4'} />
    </main>
  );
}

export default React.memo(PeriodChapter3);
