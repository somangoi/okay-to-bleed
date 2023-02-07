import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { TranslateRounded } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const langOptions = [
  { text: 'English', data: 'en' },
  { text: '한국어', data: 'ko' },
  { text: 'नेपाली', data: 'ne' },
];

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [lang, setLang] = useState('');
  const { i18n } = useTranslation();
  const open = Boolean(anchorEl);

  const handleClickMenuButton = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
    lang: string,
  ) => {
    setSelectedIndex(index);
    i18n.changeLanguage(lang).then(() => {
      setLang(lang);
    });
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton id="basic-button" onClick={handleClickMenuButton}>
        <TranslateRounded fontSize="small" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {langOptions.map((lang, index) => (
          <MenuItemComponent
            key={lang.text}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index, lang.data)}
          >
            {lang.text}
          </MenuItemComponent>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;

const MenuItemComponent = styled(MenuItem)`
  min-width: 150px;
`;
