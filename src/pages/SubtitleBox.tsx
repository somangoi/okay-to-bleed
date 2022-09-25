import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Subtitle from '../components/subtitle/Subtitle';
import subtitlesData from '../config/i18n/ko/Subtitles.json';

const getSubtitleKey = () => {
  const key = Object.keys(subtitlesData)
    .map(data => parseInt(data))
    .sort((a, b) => a - b)
    .find((data: number, index: number, array: number[]) => {
      const offsetY = window.pageYOffset || document.documentElement.scrollTop;

      if (index === array.length - 1) {
        return array[index] <= offsetY;
      } else {
        return array[index] <= offsetY && array[index + 1] >= offsetY;
      }
    });

  return key && `${key}`;
};

const SubtitleBox = () => {
  const { t } = useTranslation('Subtitles');
  const [key, setKey] = useState<string>('');

  const handleScroll = () => {
    const subtitleKey = getSubtitleKey() || '0';

    if (key !== subtitleKey) {
      setKey(subtitleKey);
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
    <SubtitleContainer>
      <Subtitle content={t(key)} />
    </SubtitleContainer>
  );
};

const SubtitleContainer = styled.div`
  position: sticky;
  z-index: 100;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default SubtitleBox;
