import React, { forwardRef } from 'react';
import { Skeleton } from './Skeleton';
import { useImage } from '../../hooks/useImage';

interface ImageSequenceProps {
  progress: number | any;
  sceneInfo: SceneInfoProps;
  currentSceneIndex: number;
}

interface SceneInfoProps {
  sceneIndex: number;
  type: string;
  scene: string;
  scrollHeight: number;
  initialNumber: number;
  totalImagesCount: number;
  prevScrollHeight: number;
}
[];

const ImageSequence = forwardRef<HTMLSpanElement, ImageSequenceProps>(
  ({ progress, sceneInfo, currentSceneIndex }, ref): any => {
    const getImageArray = (sceneInfo: SceneInfoProps) => {
      const imgArr = [];
      const newImgArr: (string | HTMLImageElement | undefined)[][] = [];

      for (
        let i = sceneInfo.initialNumber;
        i < sceneInfo.initialNumber + sceneInfo.totalImagesCount;
        i++
      ) {
        imgArr.push(
          `png/${sceneInfo.scene}/${sceneInfo.scene}_${i
            .toString()
            .padStart(5, '0')}.png`,
        );
      }

      imgArr.map(item => {
        newImgArr.push(useImage(item));
      });

      return newImgArr;
    };
    const newImages = getImageArray(sceneInfo);

    let index = Math.round(progress * 1 * (newImages.length - 1));
    if (newImages.length !== 0 && newImages[index][1] !== undefined) {
      if (newImages[index][1] === 'loading') {
        return <Skeleton width="100%" height="100%" />;
      } else {
        return newImages.map((item: any[], i) => (
          <span
            ref={ref}
            key={i}
            style={{
              // 아래 CSS 코드는 추후 fixed로 바꿀 경우에 사용할 코드입니다.
              // position: 'fixed',
              // visibility:
              //   currentSceneIndex === sceneInfo.sceneIndex
              //     ? 'visible'
              //     : 'hidden',
              // top: '74px',
              // left: '30%',
              display: i !== index ? 'none' : 'block',
              height: '100vh',
              width: '100%',
              maxWidth: '320px',
              margin: '0 auto',
              backgroundImage: `url('${item[0] ? item[0].src : null}')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        ));
      }
    }
  },
);

export default ImageSequence;
