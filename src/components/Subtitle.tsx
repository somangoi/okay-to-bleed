import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import subtitlesData from '../subtitle/subtitles.json';

const getSubtitle = () => {
  const result = subtitlesData.find(data => {
    return data.start <= window.pageYOffset && data.end >= window.pageYOffset;
  });

  return result || { text: '' };
};

function Subtitle() {
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const { text } = getSubtitle();
      if (currentSubtitle !== text) {
        setCurrentSubtitle(text);
      }
    };

    window.addEventListener('scroll', () => {
      const offsetY = window.pageYOffset || document.documentElement.scrollTop;
      if (offsetY % 20 === 0) {
        // console.log('window.scrollY', window.pageYOffset);
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
