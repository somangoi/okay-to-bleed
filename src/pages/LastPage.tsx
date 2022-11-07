import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LastPage = () => {
  const { t } = useTranslation('Period');
  return (
    <LastPageContainer>
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
  position: relative;
  top: 5rem;
  text-align: center;
  z-index: 2;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const LottieContainer = styled.div`
  position: relative;
  bottom: 0;
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

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export default LastPage;
