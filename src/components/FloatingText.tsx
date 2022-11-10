import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useScroll } from '../utils/customHooks';
import {
  Box,
  createTheme,
  Fade,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from '@mui/material';

type Props = {
  text: string;
  fontSize: string;
  fontColor: string;
  fontWeight: number;
  start: number;
  end: number;
  top: string;
  left: string;
  centerAlign?: boolean;
};

function FloatingText(props: Props) {
  const {
    text,
    fontSize,
    fontColor,
    fontWeight,
    start,
    end,
    top,
    left,
    centerAlign,
  } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery('(max-width: 600px)');

  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: 'inherit',
        fontSize: !isMobile ? fontSize : `calc(${fontSize} * 0.8)`,
        color: fontColor,
        fontWeight: fontWeight,
        wordBreak: 'keep-all',
      },
    },
  });

  useEffect(() => {
    if (scrollY >= start && scrollY < end) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scrollY]);

  return (
    <Fade in={visible}>
      <Wrapper top={top} left={left} centerAlign={centerAlign ? true : false}>
        <ThemeProvider theme={theme}>
          <TypographyComponent variant="h1">{text}</TypographyComponent>
        </ThemeProvider>
      </Wrapper>
    </Fade>
  );
}

const Wrapper = styled.div<{ top: string; left: string; centerAlign: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: ${({ top }) => top};
  /* left: ${({ left }) => left}; */
  transform: translate(
    ${({ centerAlign }) => (centerAlign ? '-50%' : '0')},
    ${({ centerAlign }) => (centerAlign ? '-50%' : '0')}
  );
  z-index: 999;
`;

const TypographyComponent = styled(Typography)`
  max-width: 600px;
  width: 80vw;
`;
export default FloatingText;
