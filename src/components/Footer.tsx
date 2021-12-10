import React from 'react';
import styled from "styled-components";

interface Props {
    theme: string
}

const StyledFooter = styled.footer<Props>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: purple;
    background: ${({ theme }) => theme.footer};
    height: 3rem;
    width: 100%;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: "#454AB0";
`;

function Footer() {
    return (
        <StyledFooter >
            <div>
                <StyledLink target="_blank" href="https://icons8.com/icon/121439/cat">
                    Cat
                </StyledLink>
                <span> icon by </span>
                <StyledLink target="_blank" href="https://icons8.com">
                     Icons8
                </StyledLink>
            </div>
            <div>
                JP448 Website
            </div>
            <div>
                Founded 19.11.2021
            </div>
        </StyledFooter>
    );
}

export default Footer;