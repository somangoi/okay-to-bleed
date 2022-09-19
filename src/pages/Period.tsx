import React from 'react';
import Animation from '../components/AnimationFrame';
import Subtitle from '../components/Subtitle';
import PeriodFAQ from './PeriodFAQ';

function Period() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <Animation name="0-0-1" playback={100} />
      <PeriodFAQ />
      <Subtitle />
    </main>
  );
}

export default React.memo(Period);
