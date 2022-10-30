import React from 'react';
import styled from 'styled-components';
import Animation from '../components/animation/AnimationFrame';
import SubtitleBox from '../components/subtitle/SubtitleBox';
import Title from '../components/Title';
import PeriodFAQ from './PeriodFAQ';
import Ch1SubtitlesData from '../config/i18n/en/Ch1Subtitles.json';
import { useTranslation } from 'react-i18next';

function Period() {
  const { t } = useTranslation('Period');
  return (
    <main style={{ padding: '1rem 0' }}>
      <Title text={t('title')} />
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

export default React.memo(Period);
