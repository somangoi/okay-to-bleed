import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Subtitle from './Subtitle';
import { throttle } from 'lodash';

type Props = {
  subtitlesName: string;
  subtitlesData: object;
};

const SubtitleBox = (props: Props) => {
  const topOffset =
    2 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 2rem
  const { subtitlesName, subtitlesData } = props;
  const { t } = useTranslation(subtitlesName);
  const [key, setKey] = useState<string>('');

  const getSubtitleKey = () => {
    const key = Object.keys(subtitlesData)
      .map(data => parseInt(data))
      .sort((a, b) => a - b)
      .find((data: number, index: number, array: number[]) => {
        const offsetY =
          (window.pageYOffset || document.documentElement.scrollTop) -
          topOffset;
        const vh = +(document.documentElement.clientHeight / 100).toFixed(2);

        if (index === array.length - 1) {
          return array[index] * vh <= offsetY;
        } else {
          return (
            array[index] * vh <= offsetY && array[index + 1] * vh >= offsetY
          );
        }
      });

    return key && `${key}`;
  };

  const handleScroll = () => {
    const subtitleKey = getSubtitleKey() || '0';

    if (key !== subtitleKey) {
      setKey(subtitleKey);
    }
  };

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        handleScroll();
      }, 300),
    );

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
