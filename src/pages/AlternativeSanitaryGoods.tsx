import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

type Props = {
  virtualHeight: number;
  maxFrame: number;
  currentScene: boolean;
};

const AlternativeSanitaryGoods = (props: Props) => {
  const { t } = useTranslation('SanitaryProducts');

  return (
    <SanitaryProductsWrapper
      virtualHeight={props.virtualHeight}
      currentScene={props.currentScene}
    >
      <ComponentSmallTitle>
        {t('AltSanitaryProductsSmallTitle')}
      </ComponentSmallTitle>
      <ComponentTitle>{t('AltSanitaryProductsTitle')}</ComponentTitle>
      <ListWrapper>
        {[1, 2, 3].map(item => {
          return (
            <ListItem key={item}>
              <ListNumber>{item}</ListNumber>
              <ListContent> {t(`AltSanitaryProductsList${item}`)}</ListContent>
            </ListItem>
          );
        })}
      </ListWrapper>
    </SanitaryProductsWrapper>
  );
};

const SanitaryProductsWrapper = styled.div<{
  virtualHeight: number;
  currentScene: boolean;
}>`
  height: ${({ virtualHeight }) => `${virtualHeight}px`};
  max-width: 600px;
  opacity: ${({ currentScene }) => (currentScene ? '1' : '0')};
  transition: opacity 0.7s ease-in-out;
`;

const ComponentSmallTitle = styled.p`
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const ComponentTitle = styled.h2`
  font-size: 1.7rem;
  line-height: 1.8rem;
  color: #fff;
  margin: 0.5rem 0 4rem 0;

  @media (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  transition: 2s all ease-in-out;
  margin: 0;
  padding: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  margin-bottom: 1rem;
  display: flex;
  background-color: rgba(255, 255, 255, 0.15);
`;

const ListNumber = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
`;

const ListContent = styled.span`
  display: block;
  margin-left: 1rem;
`;

export default AlternativeSanitaryGoods;
