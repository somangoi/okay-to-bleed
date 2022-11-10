import React, { useState } from 'react';
import styled from 'styled-components';
import '@lottiefiles/lottie-player';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

interface SanitatyButtonProps {
  item: string;
}

const SanitaryButton = ({ item }: SanitatyButtonProps) => {
  const { t } = useTranslation('SanitaryProducts');
  const [showSanitaryModal, setShowSanitaryModal] = useState(false);

  return (
    <>
      <ButtonContainer onClick={() => setShowSanitaryModal(true)}>
        {/* @ts-ignore */}
        <lottie-player
          src={`/anim/sanitary_${item}.json`}
          speed="0.3"
          loop
          autoplay
          mode="bounce"
        />
      </ButtonContainer>
      {showSanitaryModal && (
        <CustomModal
          open={showSanitaryModal}
          onClose={() => setShowSanitaryModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalContainer>
            <ModalTitle>{t(`${item}Title`)}</ModalTitle>
            <ModalScrollContainer>
              <ModalContent>{t(`${item}Desc`)}</ModalContent>
              <ModalSmallTitle>{t(`HowToUse`)}</ModalSmallTitle>
              <ModalContent>{t(`${item}HowToUse`)}</ModalContent>
            </ModalScrollContainer>
          </ModalContainer>
        </CustomModal>
      )}
    </>
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
  padding: 1.5rem;

  :hover {
    opacity: 90%;
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.3s ease-in;
  }

  :active {
    opacity: 80%;
  }
`;

const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled(Box)`
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0 20px;
`;

const ModalTitle = styled.h3`
  font-size: 1.3rem;
  color: rgb(200, 57, 56);
  margin: 0;
`;

const ModalScrollContainer = styled.div`
  max-height: 40vh;
  overflow-y: scroll;
  margin-top: 20px;
`;

const ModalSmallTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: rgb(55, 53, 47);
  margin-bottom: 0.2rem;
`;

const ModalContent = styled.p`
  color: rgb(55, 53, 47);
  white-space: pre-wrap;
  margin: 0;
  margin-top: 0.5rem;
`;

export default SanitaryButton;
