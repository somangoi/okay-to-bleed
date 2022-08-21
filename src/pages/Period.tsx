import Animation from '../components/AnimationFrame';
import animationUrl1_1 from '../anim/1_1.json?url';
import animationUrl1_2 from '../anim/1_2.json?url';
import animationUrl2_1 from '../anim/2_1.json?url';
import animationUrl2_2 from '../anim/2_2.json?url';
import animationUrl3_1 from '../anim/3_1.json?url';
import animationUrl3_2 from '../anim/3_2.json?url';

import Subtitle from '../components/Subtitle';

export default function Period() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <Animation
        id="lottie-1-1"
        animationSrc={animationUrl1_1}
        virtualHeight="800vh"
        maxFrame={300}
        stopOffset={0.1}
      />
      <Animation
        id="lottie-1-2"
        animationSrc={animationUrl1_2}
        virtualHeight="400vh"
        maxFrame={150}
      />
      <Animation
        id="lottie-2-1"
        animationSrc={animationUrl2_1}
        virtualHeight="800vh"
        maxFrame={300}
      />
      <Animation
        id="lottie-2-2"
        animationSrc={animationUrl2_2}
        virtualHeight="320vh"
        maxFrame={120}
      />
      <Animation
        id="lottie-3-1"
        animationSrc={animationUrl3_1}
        virtualHeight="400vh"
        maxFrame={150}
      />
      <Animation
        id="lottie-3-2"
        animationSrc={animationUrl3_2}
        virtualHeight="400vh"
        maxFrame={150}
      />
      <Subtitle />
    </main>
  );
}
