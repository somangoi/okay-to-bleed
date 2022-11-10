import React from 'react';
import styled from 'styled-components';
import ToggleList from '../components/list/ToggleList';
import { useTranslation } from 'react-i18next';

type Props = {
  virtualHeight: number;
  maxFrame: number;
  currentScene: boolean;
};

const PeriodFAQ = (props: Props) => {
  const { t } = useTranslation('PeriodFAQ');
  return (
    <PeriodFAQContainer
      virtualHeight={props.virtualHeight}
      currentScene={props.currentScene}
    >
      <ComponentTitle>{t('PeriodFaqTitle')}</ComponentTitle>
      <ComponentSmallTitle>{t('PeriodFaqSmallTitle')}</ComponentSmallTitle>
      <ToggleList title={t('1-1')} content={t('1-2')} />
      <ToggleList title={t('2-1')} content={t('2-2')} />
      <ToggleList title={t('3-1')} content={t('3-2')} />
      <ToggleList title={t('4-1')} content={t('4-2')} />
      <ToggleList title={t('5-1')} content={t('5-2')} />
      <ToggleList title={t('6-1')} content={t('6-2')} />
    </PeriodFAQContainer>
  );
};

const PeriodFAQContainer = styled.div<{
  virtualHeight: number;
  currentScene: boolean;
}>`
  height: ${({ virtualHeight }) => `${virtualHeight}px`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 50rem;
  position: sticky;
  z-index: 999;
  max-width: 600px;
  width: 100%;
`;

const ComponentTitle = styled.h2`
  font-size: 1.7rem;
  line-height: 1.8rem;
  color: #fff;
  margin-bottom: 0;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
`;

const ComponentSmallTitle = styled.p`
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.7);

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

export default PeriodFAQ;
