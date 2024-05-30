import styled from 'styled-components'

export const Button = styled.div`
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  &:hover {
    background-color: ${({ theme }) => theme.Colors.OUTLINE};
    color: ${({ theme }) => theme.Colors.ON_PRIMARY};
  }
`

export const Content = styled.div`
  display: inline-flex;
  padding: 1.25rem 3.75rem 2.5rem 3.75rem;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 0.625rem;
  box-shadow: 0px 4px 200px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`
