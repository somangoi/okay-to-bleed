import React, { useEffect, useState } from 'react';
import Animation from '../components/animation/AnimationFrame';
import SubtitleBox from '../components/subtitle/SubtitleBox';
import Title from '../components/Title';
import PeriodFAQ from './PeriodFAQ';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../utils/customHooks';
import SanitaryProducts from './SanitaryProducts';
import ChapterNavigation from '../components/nav/ChapterNavigation';
import FloatingText from '../components/FloatingText';
import styled from 'styled-components';
import AlternativeSanitaryGoods from './AlternativeSanitaryGoods';
import LastPage from './LastPage';

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
  top: string;
  left: string;
  centerAlign?: boolean;
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
    maxFrame: 80,
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
    sceneType: 'alternativeSanitaryGoods',
    id: 'alternative-sanitary-goods',
    animationSrc: '',
    maxFrame: 50,
    scrollHeight: 0,
  },
];

const sceneInfo4 = [
  {
    sceneType: 'lastPage',
    id: 'last-page',
    animationSrc: '',
    maxFrame: 50,
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
      id: 'title1-1',
      text: t('Chapter1-1Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 500,
      end: 7600,
      top: '6rem',
      left: '15%',
    },
    {
      id: 'title1-2',
      text: t('Chapter1-2Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 7700,
      end: 22300,
      top: '6rem',
      left: '15%',
    },
  ];
  const textInfo2 = [
    {
      id: 'title2-2',
      text: t('Chapter2-2Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 500,
      end: 17000,
      top: '6rem',
      left: '15%',
    },
    {
      id: 'title2-3',
      text: t('Chapter2-3Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 17500,
      end: 20000,
      top: '6rem',
      left: '15%',
    },
    {
      id: 'title2-4',
      text: t('Chapter2-4Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 21700,
      end: 32700,
      top: '6rem',
      left: '15%',
    },
  ];
  const textInfo3 = [
    {
      id: 'title4-1',
      text: t('Chapter4-1Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 7300,
      end: 18000,
      top: '6rem',
      left: '15%',
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
      chapter === 1
        ? sceneInfo1
        : chapter === 2
        ? sceneInfo2
        : chapter === 3
        ? sceneInfo3
        : sceneInfo4,
    );
    setTextInfo(
      chapter === 1
        ? textInfo1
        : chapter === 2
        ? textInfo2
        : chapter === 3
        ? textInfo3
        : [],
    );
  }, [chapter]);

  return (
    <PeriodContainer>
      {chapter !== 4 && <Title text={t(`Chapter${chapter}-1Title`)} />}
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
          case 'alternativeSanitaryGoods':
            return (
              <AlternativeSanitaryGoods
                virtualHeight={scene.scrollHeight}
                maxFrame={scene.maxFrame}
                currentScene={currentSceneIndex === index}
                key={scene.id}
              />
            );
          case 'lastPage':
            return <LastPage />;
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
            top={text.top}
            left={text.left}
            key={text.id}
            centerAlign={text.centerAlign}
          />
        );
      })}
      {chapter !== 4 && <SubtitleBox chapter={chapter} />}
      {chapter !== 4 && <GuideText>{t('GuideText')}</GuideText>}
      <ChapterNavigation chapter={chapter} />
    </PeriodContainer>
  );
}

const PeriodContainer = styled.main`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideText = styled.p`
  font-size: 0.8rem;
  position: relative;
  bottom: 10%;
`;

export default React.memo(Period);
