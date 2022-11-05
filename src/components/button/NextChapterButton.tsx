import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useNavigate } from 'react-router-dom';

const NextChapterButton = ({ page }: any) => {
  const { t } = useTranslation('Period');
  const navigate = useNavigate();
  return (
    <ButtonPositioner>
      <Button
        variant="contained"
        color="primary"
        endIcon={<KeyboardArrowRightRoundedIcon />}
        onClick={() => {
          navigate(`/${page}`);
        }}
      >
        {t('NextPage')}
      </Button>
    </ButtonPositioner>
  );
};

const ButtonPositioner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default NextChapterButton;
