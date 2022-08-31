import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Collapse } from '@mui/material';

interface ToggleListProps {
  title: string;
  content: string;
}

const ToggleList = ({ title, content }: ToggleListProps) => {
  const [isContentShown, setIsContentShown] = useState<boolean>(false);
  const toggleListRef = useRef<HTMLDivElement>(null);
  const maxHeightRef = useRef<number>();

  return (
    <ToggleContainer
      onClick={() => {
        setIsContentShown(!isContentShown);
      }}
      ref={toggleListRef}
    >
      <ListTitleContainer>
        <ListTitle>{title}</ListTitle>
        <IconContainer isContentShown={isContentShown}>
          <ExpandMoreRoundedIcon />
        </IconContainer>
      </ListTitleContainer>
      <Collapse in={isContentShown} timeout="auto" unmountOnExit>
        <ListContentContainer isContentShown={isContentShown}>
          <ListContent>{content}</ListContent>
        </ListContentContainer>
      </Collapse>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  padding: 1.2rem 1.2rem 1.2rem 2rem;
  border-radius: 20px;
  border: 1px solid white;
  width: 80%;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const ListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListTitle = styled.p`
  margin: 0;
  margin-right: 0.5rem;
  font-weight: 700;
`;

const IconContainer = styled.div<{ isContentShown: boolean }>`
  width: 24px;
  height: 24px;
  transition: all ease 0.4s;
  transform: ${({ isContentShown }) =>
    isContentShown ? 'rotate(-180deg)' : ''};
`;

const ListContentContainer = styled.div<{ isContentShown: boolean }>`
  visibility: ${({ isContentShown }) =>
    isContentShown ? 'visible' : 'hidden'};
  animation: ${({ isContentShown }) => (isContentShown ? 'fadeIn' : 'fadeout')}
    1s linear;
  transition: visibility 1s linear;
  padding-right: 1rem;
`;

const ListContent = styled.p``;

export default ToggleList;
