import React, { useState } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Button,
  MobileStepper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

type Props = {
  chapter: number;
};

const ChapterNavigation = ({ chapter }: Props) => {
  const theme = useTheme();
  const maxSteps = 4;
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: 600px)`);
  const { t } = useTranslation('Period');

  const sceneInfo = [
    t('Chapter1-1Title'),
    t('Chapter2-1Title'),
    t('Chapter3-1Title'),
    t('LastChapterIndex'),
  ];

  return (
    <>
      {isMobile ? (
        <NavigationContainer>
          <MobileStepper
            sx={{
              background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(5px)',
            }}
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
      ) : (
        <PcNavigationContainer>
          <Stepper
            nonLinear
            activeStep={chapter - 1}
            sx={{ width: '50vw', color: 'white' }}
          >
            {sceneInfo.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              return (
                <Step
                  key={index}
                  onClick={() => {
                    navigate(`/chapter${index + 1}`);
                  }}
                  {...stepProps}
                  sx={{ cursor: 'pointer' }}
                >
                  <StepLabel sx={{ color: 'white' }} {...labelProps}>
                    {index + 1 === chapter && label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </PcNavigationContainer>
      )}
    </>
  );
};

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const PcNavigationContainer = styled.div`
  position: sticky;
  bottom: 30px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  .MuiStep-root {
    svg {
      cursor: pointer;
      fill: rgba(0, 0, 0, 0.38);
    }
  }
  .MuiStepper-alternativeLabel {
    color: white;
  }

  .Mui-active {
    color: #fff !important;
    cursor: pointer;

    svg {
      cursor: pointer;
      fill: rgba(255, 255, 255, 0.38);
    }
  }
`;

export default ChapterNavigation;
