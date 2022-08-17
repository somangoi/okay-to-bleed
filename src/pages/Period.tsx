import Anim from '../components/Anim';
import animationData from '../anim/1_1.json';

export default function Period() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>About Period</h2>
      <Anim animData={animationData} virtualHeight="500vh" />
    </main>
  );
}
