import React from 'react';
import styled from 'styled-components';

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
    return <ButtonShape>{buttonText}</ButtonShape>;
  };

export default AllowButton;