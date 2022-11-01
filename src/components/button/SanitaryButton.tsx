// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import '@lottiefiles/lottie-player';

interface SanitatyButtonProps {
  animationData: string;
}

const SanitaryButton = ({ animationData }: SanitatyButtonProps) => {
  return (
    <ButtonContainer>
      <lottie-player
        src={animationData}
        speed="0.3"
        loop
        autoplay
        mode="bounce"
      ></lottie-player>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  flex: 1 1 40%;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #fff;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  cursor: pointer;

  :hover {
    opacity: 90%;
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.3s ease-in;
  }

  :active {
    opacity: 80%;
  }
`;
export default SanitaryButton;
