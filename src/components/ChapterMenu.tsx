import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BookmarksRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ChapterMenu.css';

function ChapterMenu() {
  const { t } = useTranslation('Common');
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
        <MenuItem>
          <Link to="/">{t('intro')}</Link>
        </MenuItem>
        <MenuItem>Ch.1 {t('ch1')}</MenuItem>
        <MenuItem>Ch.2 {t('ch2')}</MenuItem>
        <MenuItem>Ch.3 {t('ch3')}</MenuItem>
        <MenuItem>Ch.4 {t('ch4')}</MenuItem>
        <MenuItem>{t('end')}</MenuItem>
      </Menu>
    </a>
  );
}

export default ChapterMenu;
