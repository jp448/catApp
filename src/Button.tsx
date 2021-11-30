import React from 'react';
import styled from "styled-components";

const PrimaryBtn = styled.button`
    width: 8rem;
    height: 3rem;
    background-color: purple;
    color: #FFFFFF;
    border-radius: 0.3rem;
    border: none;
    margin-top: 2rem;
`;

type ButtonProps = {
    text: string
}

function Button({text}: ButtonProps) {
    return (
        <PrimaryBtn>{text}</PrimaryBtn>
    );
}

export default Button;