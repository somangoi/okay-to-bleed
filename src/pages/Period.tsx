import React, { useEffect, useState } from 'react';
import Animation from '../components/animation/AnimationFrame';
import SubtitleBox from '../components/subtitle/SubtitleBox';
import Title from '../components/Title';
import PeriodFAQ from './PeriodFAQ';
import Ch1SubtitlesData from '../config/i18n/en/Ch1Subtitles.json';
import Ch2SubtitlesData from '../config/i18n/en/Ch2Subtitles.json';
import Ch3SubtitlesData from '../config/i18n/en/Ch3Subtitles.json';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../utils/customHooks';
import SanitaryProducts from './SanitaryProducts';
import ChapterNavigation from '../components/nav/ChapterNavigation';
import FloatingText from '../components/FloatingText';

type SceneInfo = {
  sceneType: string;
  id: string;
  animationSrc: string;
  maxFrame: number;
  scrollHeight: number;
  stopOffset?: number;
}[];

type TextInfo = {
  id: string;
  text: string;
  fontSize: string;
  fontColor: string;
  fontWeight: number;
  start: number;
  end: number;
  xPos: number;
  yPos: number;
}[];

type PeriodProps = { chapter: number };

const sceneInfo1 = [
  {
    sceneType: 'animation',
    id: 'lottie-1-1',
    animationSrc: '/anim/chapter1-1.json',
    maxFrame: 386,
    scrollHeight: 0,
    stopOffset: 0.1,
  },
  {
    sceneType: 'animation',
    id: 'lottie-1-2',
    animationSrc: '/anim/chapter1-2.json',
    maxFrame: 725,
    scrollHeight: 0,
  },
];

const sceneInfo2 = [
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

const sceneInfo3 = [
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

function Period({ chapter }: PeriodProps) {
  const { t } = useTranslation('Period');
  const { scrollY } = useScroll();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [sceneInfo, setSceneInfo] = useState<SceneInfo>([]);
  const [textInfo, setTextInfo] = useState<TextInfo>([]);

  const textInfo1 = [
    {
      id: 'title1-2',
      text: t('Chapter1-2Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 7700,
      end: 22300,
      xPos: 35,
      yPos: 15,
    },
  ];
  const textInfo2 = [
    {
      id: 'empty',
      text: '',
      fontSize: '0',
      fontColor: 'white',
      fontWeight: 0,
      start: 0,
      end: 0,
      xPos: 0,
      yPos: 0,
    },
  ];
  const textInfo3 = [
    {
      id: 'empty',
      text: '',
      fontSize: '0',
      fontColor: 'white',
      fontWeight: 0,
      start: 0,
      end: 0,
      xPos: 0,
      yPos: 0,
    },
  ];

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
      window.scrollTo({ top: 0 });
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
  }, [sceneInfo]);

  useEffect(() => {
    setSceneInfo(
      chapter === 1 ? sceneInfo1 : chapter === 2 ? sceneInfo2 : sceneInfo3,
    );
    setTextInfo(
      chapter === 1 ? textInfo1 : chapter === 2 ? textInfo2 : textInfo3,
    );
  }, [chapter]);

  return (
    <main style={{ padding: '1rem 0' }}>
      <Title text={t(`Chapter${chapter}-1Title`)} />
      {sceneInfo.map((scene, index) => {
        switch (scene.sceneType) {
          case 'animation':
            return (
              <Animation
                id={scene.id}
                animationSrc={scene.animationSrc}
                virtualHeight={scene.scrollHeight}
                maxFrame={scene.maxFrame}
                stopOffset={scene.stopOffset}
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
      {textInfo.map((text, index) => {
        return (
          <FloatingText
            text={text.text}
            fontSize={text.fontSize}
            fontColor={text.fontColor}
            fontWeight={text.fontWeight}
            start={text.start}
            end={text.end}
            xPos={text.xPos}
            yPos={text.yPos}
            key={text.id}
          />
        );
      })}
      <SubtitleBox
        subtitlesName={`Ch${chapter}Subtitles`}
        subtitlesData={
          chapter === 1
            ? Ch1SubtitlesData
            : chapter === 2
            ? Ch2SubtitlesData
            : Ch3SubtitlesData
        }
      />
      <ChapterNavigation chapter={chapter} />
    </main>
  );
}

export default React.memo(Period);
