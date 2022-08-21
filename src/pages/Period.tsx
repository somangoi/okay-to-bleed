import Anim from '../components/AnimationFrame';
import animationData1_1 from '../anim/1_1.json';
import animationData1_2 from '../anim/1_2.json';
import animationData2_1 from '../anim/2_1.json';
import animationData2_2 from '../anim/2-2.json';
import animationData3_1 from '../anim/3-1.json';
import animationData3_2 from '../anim/3-2.json';
import Subtitle from '../components/Subtitle';

export default function Period() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <Anim animData={animationData1_1} virtualHeight="400vh" />
      <Anim animData={animationData1_2} virtualHeight="400vh" />
      <Anim animData={animationData2_1} virtualHeight="700vh" />
      <Anim animData={animationData2_2} virtualHeight="700vh" />
      <Anim animData={animationData3_1} virtualHeight="700vh" />
      <Anim animData={animationData3_2} virtualHeight="700vh" />
      <Subtitle />
    </main>
  );
}
