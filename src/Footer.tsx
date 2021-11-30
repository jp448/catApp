import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: purple;
    color: #ffffff;
    height: 3rem;
`;

const StyledLink = styled.a`
    color: #FFFFFF;
    text-decoration: none;
`;

function Footer() {
    return (
        <StyledFooter className="Footer">
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