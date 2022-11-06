import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { useNavigate } from 'react-router-dom';

const NextChapterButton = ({ page }: any) => {
  const { t } = useTranslation('Period');
  const navigate = useNavigate();
  return (
    <ButtonPositioner page={page}>
      {page !== 1 && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<KeyboardArrowLeftRoundedIcon />}
          onClick={() => {
            scrollTo(0, 0);
            navigate(page === 2 ? '/' : `/chapter${page - 1}`);
          }}
        >
          {t('PreviousPage')}
        </Button>
      )}
      {page !== 3 && (
        <Button
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightRoundedIcon />}
          onClick={() => {
            scrollTo(0, 0);
            navigate(`/chapter${page + 1}`);
          }}
        >
          {t('NextPage')}
        </Button>
      )}
    </ButtonPositioner>
  );
};

const ButtonPositioner = styled.div<{ page: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ page }) =>
    page === 1 ? 'flex-end' : page === 3 ? 'flex-start' : 'space-between'};
`;

export default NextChapterButton;
