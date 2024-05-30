import styled, { createGlobalStyle } from 'styled-components'

const defaultStyleGlobal = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace; 
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  input {
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`

export const ContainerGlobal = styled.div`
  background-color: ${({ theme }) => theme.Colors.SURFACE};
  min-height: 100vh;
  overflow: hidden;

  position: relative;
`

export default defaultStyleGlobal
