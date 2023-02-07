import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

export default function Support() {
  const { t } = useTranslation('Period');
  return (
    <SupportContainer>
      <SmartToyOutlinedIcon sx={{ fontSize: '5rem' }} />
      <SupportTitle>{t('ComingSoon')}</SupportTitle>
    </SupportContainer>
  );
}

const SupportContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin-top: -2rem;
`;

const SupportTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
  word-break: 'keep-all';

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
