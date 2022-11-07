import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Subtitle from './Subtitle';
import Ch1SubtitlesData from '../../config/i18n/en/Ch1Subtitles.json';
import Ch2SubtitlesData from '../../config/i18n/en/Ch2Subtitles.json';
import Ch3SubtitlesData from '../../config/i18n/en/Ch3Subtitles.json';

type Props = {
  chapter: number;
};

const SubtitleBox = ({ chapter }: Props) => {
  const { t } = useTranslation(`Ch${chapter}Subtitles`);
  const [key, setKey] = useState<string>('');
  const [chapterSubtitle, setChapterSubtitle] = useState<any>(null);

  const topOffset =
    2 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 2rem

  const getSubtitleKey = useCallback(() => {
    if (!chapterSubtitle) return;
    const key = Object.keys(chapterSubtitle)
      .map(data => parseInt(data))
      .sort((a, b) => a - b)
      .find((data: number, index: number, array: number[]) => {
        const offsetY =
          (window.pageYOffset || document.documentElement.scrollTop) -
          topOffset;

        return array[index] <= offsetY && array[index + 1] >= offsetY;
      });

    return key && `${key}`;
  }, [chapterSubtitle]);

  const handleScroll = useCallback(() => {
    const subtitleKey = getSubtitleKey() || '0';

    if (key !== subtitleKey) {
      setKey(subtitleKey);
    }
  }, [chapterSubtitle]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [chapterSubtitle]);

  useEffect(() => {
    chapter &&
      setChapterSubtitle(
        chapter === 1
          ? Ch1SubtitlesData
          : chapter === 2
          ? Ch2SubtitlesData
          : Ch3SubtitlesData,
      );
  }, [chapter]);

  return (
    <SubtitleContainer>
      <Subtitle content={t(key)} />
    </SubtitleContainer>
  );
};

const SubtitleContainer = styled.div`
  position: sticky;
  z-index: 100;
  bottom: 5rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default SubtitleBox;
