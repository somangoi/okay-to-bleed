import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BookmarksRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

function ChapterMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <a>
      <IconButton
        id="chapter-button"
        aria-controls={open ? 'chapter-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <BookmarksRounded />
      </IconButton>
      <Menu
        id="chapter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>Ch.1 Intro</MenuItem>
        <MenuItem>Ch.2 What is period?</MenuItem>
        <MenuItem>Ch.3 Intro</MenuItem>
      </Menu>
    </a>
  );
}

export default ChapterMenu;
