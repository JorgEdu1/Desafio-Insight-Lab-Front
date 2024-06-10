import styled from 'styled-components'
import { InputMask } from '@react-input/mask'

export const Content = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  padding: 2rem;
  flex-direction: column;
  border-radius: 0.625rem;
  box-shadow: 0px 4px 200px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  color: ${({ theme }) => theme.Colors.TEXT};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
`

export const SectionForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  color: ${({ theme }) => theme.Colors.TEXT};
  border-radius: 5px;
  padding: 10px;
`

export const InputMaskedStyled = styled(InputMask)`
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  color: ${({ theme }) => theme.Colors.TEXT};
  border-radius: 5px;
  padding: 10px;
`

export const SectionButton = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-top: 10px;
`

export const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.Colors.OUTLINE};
  color: ${({ theme }) => theme.Colors.TEXT};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  &:hover {
    background-color: ${({ theme }) => theme.Colors.OUTLINE};
    color: ${({ theme }) => theme.Colors.ON_PRIMARY};
  }
`

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 60px;
`
