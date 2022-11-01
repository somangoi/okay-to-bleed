import React from 'react';
import styled from 'styled-components';
import SanitaryButton from '../components/button/SanitaryButton';

const animationInfo = [
  '/anim/sanitary_menstrualCup.json',
  '/anim/sanitary_reusablePad.json',
  '/anim/sanitary_sanitaryPad.json',
  '/anim/sanitary_tampon.json',
];

type Props = {
  virtualHeight: number;
  maxFrame: number;
  currentScene: boolean;
};

const SanitaryProducts = (props: Props) => {
  return (
    <SanitaryProductsWrapper
      virtualHeight={props.virtualHeight}
      currentScene={props.currentScene}
    >
      {animationInfo.map((anim, index) => {
        return <SanitaryButton animationData={anim} key={index} />;
      })}
    </SanitaryProductsWrapper>
  );
};

const SanitaryProductsWrapper = styled.div<{
  virtualHeight: number;
  currentScene: boolean;
}>`
  height: ${({ virtualHeight }) => `${virtualHeight}px`};
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  height: 100%;
  position: sticky;
  z-index: 999;
`;

export default SanitaryProducts;
