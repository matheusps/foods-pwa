import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const getFinalSize = (val: number, size: string | undefined) => {
  switch (size) {
    case 'sm':
      return 2 * val
    case 'md':
      return 3 * val
    case 'lg':
      return 4 * val
    case 'xl':
      return 5 * val
  }
}

const Loader = styled.div`
  color: transparent !important;
  min-height: ${({ size }: Props) => getFinalSize(0.8, size)}rem;
  pointer-events: none;
  position: relative;

  ::after {
    animation: ${rotate} 500ms infinite linear;
    border: 0.2rem solid ${props => props.theme.primary};
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: block;
    height: ${({ size }: Props) => getFinalSize(0.8, size)}rem;
    left: 50%;
    margin-left: ${({ size }: Props) => getFinalSize(-0.4, size)}rem;
    margin-top: ${({ size }: Props) => getFinalSize(-0.4, size)}rem;
    position: absolute;
    top: 50%;
    width: ${({ size }: Props) => getFinalSize(0.8, size)}rem;
    z-index: 1;
  }
`

Loader.defaultProps = {
  size: 'md',
}

export default Loader
