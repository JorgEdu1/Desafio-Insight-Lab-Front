import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`

export const Loader = styled.div`
  border: 3px solid ${({ theme }) => theme.Colors.OUTLINE};
  border-top: 3px solid ${({ theme }) => theme.Colors.TEXT};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 1s linear infinite;
`
