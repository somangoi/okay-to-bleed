import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useScroll } from '../utils/customHooks';
import {
  Box,
  createTheme,
  Fade,
  ThemeProvider,
  Typography,
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
};

function FloatingText(props: Props) {
  const { text, fontSize, fontColor, fontWeight, start, end, top, left } =
    props;
  const [visible, setVisible] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: fontSize,
        color: fontColor,
        fontWeight: fontWeight,
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
      <Wrapper top={top} left={left}>
        <ThemeProvider theme={theme}>
          <Typography variant="h1">{text}</Typography>
        </ThemeProvider>
      </Wrapper>
    </Fade>
  );
}

const Wrapper = styled.div<{ top: string; left: string }>`
  position: fixed;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: translate(-50%, -50%);
  z-inex: 999;
`;

export default FloatingText;
