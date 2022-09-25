import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useScroll } from '../hooks/useScroll';
import PeriodFAQ from './PeriodFAQ';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from '../components/animation/Sequence';

const sceneInfo = [
  {
    sceneIndex: 0,
    type: 'animation',
    scene: 'Intro',
    scrollHeight: 0,
    initialNumber: 0,
    totalImagesCount: 379,
    prevScrollHeight: 0,
  },
  {
    sceneIndex: 1,
    type: 'animation',
    scene: 'Chapter1-1',
    scrollHeight: 0,
    initialNumber: 379,
    totalImagesCount: 369,
    prevScrollHeight: 0,
  },
  {
    sceneIndex: 2,
    type: 'animation',
    scene: 'Chapter1-2',
    scrollHeight: 0,
    initialNumber: 748,
    totalImagesCount: 386,
    prevScrollHeight: 0,
  },
  {
    sceneIndex: 3,
    type: 'normal',
    scene: 'faq',
    scrollHeight: 530,
    initialNumber: 0,
    totalImagesCount: 0,
    prevScrollHeight: 0,
  },
];

const NewPeriod = () => {
  const { scrollY } = useScroll();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const SequenceRef = useRef<HTMLSpanElement>(null);

  /**
   * 아래 코멘트 처리된 부분은 추후 position이 fixed로 변경될 경우 사용할 코드입니다.
   */

  // let prevScrollHeight = 0;
  //
  // useEffect(() => {
  //   console.log(currentSceneIndex);
  // }, [currentSceneIndex]);

  // useEffect(() => {
  //   prevScrollHeight = 0;
  //   console.log('currentSceneIndex', currentSceneIndex);
  //   for (let i = 0; i < currentSceneIndex; i++) {
  //     prevScrollHeight += sceneInfo[i]?.scrollHeight;
  //   }
  //   console.log('prevScrollHeight', prevScrollHeight);

  //   if (
  //     scrollY >
  //     prevScrollHeight + sceneInfo[currentSceneIndex]?.scrollHeight
  //   ) {
  //     setCurrentSceneIndex(currentSceneIndex + 1);
  //   }
  //   if (scrollY < prevScrollHeight) {
  //     if (currentSceneIndex === 0) return;
  //     setCurrentSceneIndex(currentSceneIndex - 1);
  //   }
  //   console.log('scroll', scrollY);
  // }, [scrollY]);

  // useEffect(() => {
  //   const setScrollHeight = () => {
  //     for (let i = 0; i < sceneInfo.length; i++) {
  //       sceneInfo[i].scrollHeight = sceneInfo[i].totalImagesCount * 20;
  //     }

  //     // 새로고침시, current scene index 리셋
  //     let totalScrollHeight = 0;
  //     for (let i = 0; i < sceneInfo.length; i++) {
  //       totalScrollHeight += sceneInfo[i].scrollHeight;
  //       if (totalScrollHeight >= window.scrollY) {
  //         setCurrentSceneIndex(i);
  //         break;
  //       }
  //     }
  //   };

  //   setScrollHeight();
  // }, []);

  return (
    <main>
      {sceneInfo.map((sceneInfo, index) => {
        switch (sceneInfo.type) {
          case 'animation':
            return (
              <Controller key={index}>
                <Scene
                  duration={sceneInfo.totalImagesCount * 10}
                  triggerHook={0}
                  pin
                >
                  {(progress: number) => (
                    <div
                      style={{
                        width: '100%',
                        position: 'relative',
                      }}
                    >
                      <Sequence
                        ref={SequenceRef}
                        progress={progress}
                        sceneInfo={sceneInfo}
                        currentSceneIndex={currentSceneIndex}
                      />
                    </div>
                  )}
                </Scene>
              </Controller>
            );
          case 'normal':
            if (sceneInfo.scene === 'faq') {
              return <PeriodFAQ key={index} />;
            } else {
              return <div>{sceneInfo.scene}</div>;
            }
          default:
            return;
        }
      })}
    </main>
  );
};

export default NewPeriod;
