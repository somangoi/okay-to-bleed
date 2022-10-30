import React from 'react';
import styled from 'styled-components';

interface SubtitleProps {
  content: string;
}

function Subtitle({ content }: SubtitleProps) {
  return <>{content && content !== '' && <Sub>{content}</Sub>}</>;
}

const Sub = styled.p`
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5vh 2vh;
  text-align: center;
`;

export default Subtitle;
