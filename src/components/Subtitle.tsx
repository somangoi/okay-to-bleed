import React, { useState } from 'react';
import styled from 'styled-components';

function Subtitle() {
  return (
    <SubtitleBox>
      <p>Subtitle Subtitle Subtitle Subtitle Subtitle</p>
    </SubtitleBox>
  );
}

const SubtitleBox = styled.div`
  position: sticky;
  z-index: 100;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export default Subtitle;
