import React from 'react'
import styled from 'styled-components';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as MoonIcon } from './icons/moon.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  }
`;

type ToggleProps = {
    theme: string,
    toggleTheme: () => void
}

const Toggle = ({ theme, toggleTheme }: ToggleProps) => {
    //const isLight = theme === 'light';
    return (
        <button onClick={toggleTheme} >
            <SunIcon />
            <MoonIcon />
        </button>
    );
};

export default Toggle;
