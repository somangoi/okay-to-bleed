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
  align-items: center;
  padding-top: 50rem;
  position: sticky;
  z-index: 999;
`;

export default PeriodFAQ;
