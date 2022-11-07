import React from 'react';
import styled from 'styled-components';
import SanitaryButton from '../components/button/SanitaryButton';
import { useTranslation } from 'react-i18next';

const sanitaryProductsInfo = [
  'sanitaryPad',
  'reusablePad',
  'tampon',
  'menstrualCup',
];

type Props = {
  virtualHeight: number;
  maxFrame: number;
  currentScene: boolean;
};

const SanitaryProducts = (props: Props) => {
  const { t } = useTranslation('SanitaryProducts');

  return (
    <SanitaryProductsWrapper
      virtualHeight={props.virtualHeight}
      currentScene={props.currentScene}
    >
      <ComponentTitle>{t('SanitaryProductsTitle')}</ComponentTitle>
      <ComponentSmallTitle>
        {t('SanitaryProductsSmallTitle')}
      </ComponentSmallTitle>
      <SanitaryProductsContainer>
        {sanitaryProductsInfo.map((item, index) => {
          return <SanitaryButton item={item} key={index} />;
        })}
      </SanitaryProductsContainer>
    </SanitaryProductsWrapper>
  );
};

const SanitaryProductsWrapper = styled.div<{
  virtualHeight: number;
  currentScene: boolean;
}>`
  height: ${({ virtualHeight }) => `${virtualHeight}px`};
  z-index: 999;
  max-width: 600px;
  opacity: ${({ currentScene }) => (currentScene ? '1' : '0')};
  transition: opacity 0.7s ease-in-out;
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

const SanitaryProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  position: sticky;
  z-index: 999;
  max-width: 600px;
`;

export default SanitaryProducts;
