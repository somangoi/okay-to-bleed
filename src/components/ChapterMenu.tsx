import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BookmarksRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ChapterMenu.css';

function ChapterMenu() {
  const { t } = useTranslation('Period');
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
        <BookmarksRounded fontSize="small" />
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
        <Link to="/">
          <MenuItem>Ch.1 {t('Chapter1-1Title')}</MenuItem>
        </Link>
        <Link to="/chapter2">
          <MenuItem>Ch.2 {t('Chapter2-1Title')}</MenuItem>
        </Link>
        <Link to="/chapter3">
          <MenuItem>Ch.3 {t('Chapter3-1Title')}</MenuItem>
        </Link>
      </Menu>
    </a>
  );
}

export default ChapterMenu;
