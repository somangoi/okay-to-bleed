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

function Subtitle() {
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  const handleScroll = () => {
    const { text } = getSubtitle();
    if (currentSubtitle !== text) {
      setCurrentSubtitle(text);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const offsetY = window.pageYOffset || document.documentElement.scrollTop;
      if (offsetY % 10 === 0) {
        handleScroll();
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SubtitleBox>{currentSubtitle && <Sub>{currentSubtitle}</Sub>}</SubtitleBox>
  );
}

const SubtitleBox = styled.div`
  position: sticky;
  z-index: 100;
  bottom: 2rem;
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
