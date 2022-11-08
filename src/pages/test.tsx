import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LastPage = () => {
  const { t } = useTranslation('Period');
  const [visible, setVisible] = useState<boolean>(false);
  const textInfo = [
    {
      id: 'title2-2',
      text: t('Chapter2-2Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 500,
      end: 17000,
      top: '6rem',
      left: '15%',
    },
    {
      id: 'title2-3',
      text: t('Chapter2-3Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 17500,
      end: 20000,
      top: '6rem',
      left: '15%',
    },
    {
      id: 'title2-4',
      text: t('Chapter2-4Title'),
      fontSize: '2rem',
      fontColor: 'white',
      fontWeight: 600,
      start: 21700,
      end: 32700,
      top: '6rem',
      left: '15%',
    },
  ];

  useEffect(() => {
    if (scrollY >= start && scrollY < end) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scrollY]);

  return (
    <LastPageContainer>
      {textInfo.map((text, index) => {
        return <Text>{t('LastChapterContent1')}</Text>;
      })}
      <Text>{t('LastChapterContent1')}</Text>
      <Text>{t('LastChapterContent2')}</Text>
      <Text>{t('LastChapterContent3')}</Text>
      <Title>{t('LastChapterTitle')}</Title>
      <LottieContainer>
        {/* @ts-ignore */}
        <lottie-player
          src={`/anim/chapter4-2.json`}
          speed="0.3"
          loop
          autoplay
          mode="bounce"
        />
      </LottieContainer>
    </LastPageContainer>
  );
};

const LastPageContainer = styled.div`
  max-width: 600px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  word-break: keep-all;
  white-space: break-spaces;
  font-size: 1.2rem;
  line-height: 1.2;
  top: 5rem;
  text-align: center;

  position: fixed;
  transform: translate('-50%', '-50%');
  z-index: 999;
`;

const LottieContainer = styled.div`
  position: absolute;
  bottom: -10%;
  max-width: 800px;
`;

const Title = styled.h2`
  word-break: keep-all;
  white-space: break-spaces;
  font-size: 2rem;
  line-height: 1.2;
  position: relative;
  top: 5rem;
  text-align: center;
  z-index: 2;
`;

export default LastPage;
