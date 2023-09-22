import React from 'react';
import styled from 'styled-components';
import AllowButton from '../AllowButton/AllowButton';

const MainContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #bde0fe, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainPage = ({ titleText, buttonText }) => {
  return (
    <MainContainer>
      <h1>{titleText}</h1>
      <AllowButton buttonText={buttonText} />
    </MainContainer>
  );
};

export default MainPage;
