import React from 'react'
import styled from 'styled-components';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as MoonIcon } from './icons/moon.svg';

interface Props {
    theme: string,
    lightTheme: boolean
}

const ToggleContainer = styled.button<Props>`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

type ToggleProps = {
    theme: string,
    toggleTheme: () => void
}

const Toggle = ({ theme, toggleTheme }: ToggleProps) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
            <SunIcon />
            <MoonIcon />
        </ToggleContainer>
    );
};

export default Toggle;
