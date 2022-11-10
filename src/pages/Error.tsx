import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

type Props = {
  errorCode: number;
};

export default function Error(props: Props) {
  const { errorCode } = props;
  const { t } = useTranslation('Errors');
  return (
    <ErrorContainer>
      <ErrorOutlineOutlinedIcon sx={{ fontSize: '5rem' }} />
      <ErrorTitle>{t(errorCode + '-title')}</ErrorTitle>
      <ErrorDesc>{t(errorCode + '-desc')}</ErrorDesc>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin-top: -2rem;
`;

const ErrorTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
  word-break: 'keep-all';

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const ErrorDesc = styled.p`
  text-align: center;
  width: 90%;
  font-size: 1.2rem;
  text-align: center;
  word-break: 'keep-all';

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
