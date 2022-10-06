// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import Animation from '../components/animation/AnimationFrame';
import SubtitleBox from '../components/subtitle/SubtitleBox';
import PeriodFAQ from './PeriodFAQ';
import Ch1SubtitlesData from '../config/i18n/en/Ch1Subtitles.json';
import '@lottiefiles/lottie-player';
import { useTranslation } from 'react-i18next';

function Period() {
  const { t } = useTranslation('Common');
  return (
    <main style={{ padding: '1rem 0' }}>
      <Title>{t('title')}</Title>
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_ADqq0Z.json"
        background="transparent"
        speed="1"
        style={{ width: 150, height: 150, margin: 'auto' }}
        loop
        autoplay
      ></lottie-player>
      <Animation
        id="lottie-1-1"
        animationSrc="/anim/1_1.json"
        virtualHeight="600vh"
        maxFrame={300}
        stopOffset={0.1}
      />
      <Animation
        id="lottie-1-2"
        animationSrc="/anim/1_2.json"
        virtualHeight="600vh"
        maxFrame={150}
      />
      <Animation
        id="lottie-2-1"
        animationSrc="/anim/2_1.json"
        virtualHeight="600vh"
        maxFrame={300}
      />
      <Animation
        id="lottie-2-2"
        animationSrc="/anim/2_2.json"
        virtualHeight="240vh"
        maxFrame={120}
      />
      <Animation
        id="lottie-3-1"
        animationSrc="/anim/3_1.json"
        virtualHeight="300vh"
        maxFrame={150}
      />
      <Animation
        id="lottie-3-2"
        animationSrc="/anim/3_2.json"
        virtualHeight="300vh"
        maxFrame={150}
      />
      <PeriodFAQ />
      <SubtitleBox
        subtitlesName="Ch1Subtitles"
        subtitlesData={Ch1SubtitlesData}
      />
    </main>
  );
}

const Title = styled.div`
  padding: auto;
  font-size: 80px;
  width: 100%;
  text-align: center;
  margin: 5rem 0px;
  line-height: 1.5;
`;

export default React.memo(Period);
