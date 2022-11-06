import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button, useMediaQuery } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { useNavigate } from 'react-router-dom';

const ChapterNavigationButton = ({ chapter }: any) => {
  const { t } = useTranslation('Period');
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <ButtonPositioner>
      <PrevButton
        variant="text"
        startIcon={<KeyboardArrowLeftRoundedIcon />}
        onClick={() => {
          scrollTo(0, 0);
          navigate(`/chapter${chapter - 1}`);
        }}
        chapter={chapter}
      >
        {t('Back')}
      </PrevButton>
      <NextButton
        variant="text"
        endIcon={<KeyboardArrowRightRoundedIcon />}
        onClick={() => {
          scrollTo(0, 0);
          navigate(`/chapter${chapter + 1}`);
        }}
        chapter={chapter}
      >
        {t(!isMobile ? 'NextPage' : 'Next')}
      </NextButton>
    </ButtonPositioner>
  );
};

const ButtonPositioner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  bottom: 30px;
`;

const PrevButton = styled(Button)<{ chapter: number }>`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  border-radius: 10px;
  padding-right: 15px;
  visibility: ${({ chapter }) => (chapter === 1 ? 'hidden' : 'visible')};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NextButton = styled(Button)<{ chapter: number }>`
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  padding-left: 15px;
  visibility: ${({ chapter }) => (chapter === 3 ? 'hidden' : 'visible')};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export default ChapterNavigationButton;
