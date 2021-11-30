import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: red;
    height: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
`;

const StyledButton = styled.button`
    width: 4rem;
    height: 2rem;
`;

type NavProps = {
    raiseFunction: () => void,
}

function Nav({raiseFunction}: NavProps) {
    return(
        <StyledNav>
            <StyledButton onClick={raiseFunction}>Toggle theme</StyledButton>
        </StyledNav>
    );
}

export default Nav;