import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import subtitlesData from '../../subtitle/subtitles.json';

const getSubtitle = () => {
  const result = subtitlesData.find(data => {
    const offsetY = window.pageYOffset || document.documentElement.scrollTop;
    return data.start <= offsetY && data.end >= offsetY;
  });

  return result || { text: '' };
};

const getTicker = (observer: IntersectionObserver) => {
  document.querySelectorAll('.animation_wrapper').forEach(placeholder => {
    observer.observe(placeholder);
  });
};

const createThreshold = () => {
  const thresholdArray = [];

  /**
   * 일단 임의로 0.015라는 값을 주었고
   * 더 자주 자막을 확인해서 변경하게 하고 싶으면 더 적은 숫자를 넣으시면 됩니다
   */

  for (let i = 0; i < 1; i += 0.015) {
    thresholdArray.push(i);
  }

  return thresholdArray;
};

function Subtitle() {
  const [currentSubtitle, setCurrentSubtitle] = useState<string>('');

  const handleScroll = () => {
    const { text } = getSubtitle();
    if (currentSubtitle !== text) {
      setCurrentSubtitle(text);
    }
  };

  const observer = new IntersectionObserver(handleScroll, {
    threshold: createThreshold(),
    /**
     *얘가 저희 애니메이션 프레임의 위치나 높이 등을 잘 인식하지 못해서인지 
      아래 rootMargin이 없으면 제대로 작동이 잘 안되네요
      지금은 임의의 값(위아래 2000px)을 넣어 위아래를 넉넉히 확인하도록 해두었습니다.
     */
    rootMargin: '2000px 0px 2000px 0px',
  });

  useEffect(() => {
    getTicker(observer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SubtitleBox>{currentSubtitle && <Sub>{currentSubtitle}</Sub>}</SubtitleBox>
  );
}

const SubtitleBox = styled.div`
  position: sticky;
  z-index: 2;
  bottom: 5rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Sub = styled.p`
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5vh 2vh;
  text-align: center;
`;

export default Subtitle;
