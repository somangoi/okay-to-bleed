import Anim from '../components/AnimationFrame';
import animationData1_1 from '../anim/1_1.json';
import animationData1_2 from '../anim/1_2.json';
import animationData2_1 from '../anim/2_1.json';

export default function Period() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>About Period</h2>
      <Anim animData={animationData1_1} virtualHeight="400vh" />
      <Anim animData={animationData1_2} virtualHeight="400vh" />
      <Anim animData={animationData2_1} virtualHeight="700vh" />
    </main>
  );
}
