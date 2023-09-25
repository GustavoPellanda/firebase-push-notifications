import React from 'react';
import styled from 'styled-components';
import { AsksForPermission } from '../../services/NotificationPermission';

const ButtonShape = styled.button`
    background-color: #007acc;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
    background-color: #005d9e;
    }
`;

const AllowButton = ({ buttonText }) => {
  const handleButtonClick = () => {
    AsksForPermission(); 
  };

  return <ButtonShape onClick={handleButtonClick}>{buttonText}</ButtonShape>;
};

export default AllowButton;