import React from 'react';
import { Box, Zoom, Fab } from '@mui/material';
import { KeyboardArrowUpRounded } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export const ScrollToTopButton = () => {
  const trigger = useScrollTrigger();

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 2,
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpRounded />
        </Fab>
      </Box>
    </Zoom>
  );
};
