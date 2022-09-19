import React from 'react';
import Animation from '../components/animation/AnimationFrame';
import Subtitle from '../components/subtitle/Subtitle';
import PeriodFAQ from './PeriodFAQ';

function Period() {
  return (
    <main style={{ padding: '1rem 0' }}>
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
        virtualHeight="300vh"
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
      <Subtitle />
    </main>
  );
}

export default React.memo(Period);
