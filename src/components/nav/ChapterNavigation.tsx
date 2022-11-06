import React, { useState } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ChapterNavigation = ({ chapter }: any) => {
  const theme = useTheme();
  const maxSteps = 3;
  const navigate = useNavigate();

  return (
    <NavigationContainer>
      <MobileStepper
        sx={{ background: 'rgba(255,255,255,0.6)' }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={chapter - 1}
        nextButton={
          <Button
            size="small"
            onClick={() => {
              scrollTo(0, 0);
              navigate(`/chapter${chapter + 1}`);
            }}
            disabled={chapter === maxSteps}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={() => {
              scrollTo(0, 0);
              navigate(`/chapter${chapter - 1}`);
            }}
            disabled={chapter === 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default ChapterNavigation;
