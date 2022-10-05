import React from 'react';
import Animation from '../components/animation/AnimationFrame';
import SubtitleBox from '../components/subtitle/SubtitleBox';
import PeriodFAQ from './PeriodFAQ';
import Ch1SubtitlesData from '../config/i18n/en/Ch1Subtitles.json';

function Period() {
  return (
    <main>
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
