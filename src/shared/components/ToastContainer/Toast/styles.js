import styled, { css } from 'styled-components'
import { animated } from '@react-spring/web'

const toastTypeVariations = {
  notification: css`
    background: ${(p) => p.theme.Colors.BACKGROUND};
    > svg {
      color: ${(p) => p.theme.Colors.TOAST.ERROR};
    }
    > span {
      background-color: ${(p) => p.theme.Colors.TEXT};
    }
  `,
  success: css`
    background: ${(p) => p.theme.Colors.BACKGROUND};
    > svg {
      color: ${(p) => p.theme.Colors.TOAST.SUCCESS};
    }
    > span {
      background-color: ${(p) => p.theme.Colors.TEXT};
    }
  `,
  error: css`
    background: ${(p) => p.theme.Colors.BACKGROUND};
    > svg {
      color: ${(p) => p.theme.Colors.TOAST.ERROR};
    }
    > span {
      background-color: ${(p) => p.theme.Colors.TEXT};
    }
  `,
  warning: css`
    background: ${(p) => p.theme.Colors.BACKGROUND};
    > svg {
      color: ${(p) => p.theme.Colors.TOAST.WARNING};
    }
    > span {
      background-color: ${(p) => p.theme.Colors.TEXT};
    }
  `,
}

export const Container = styled(animated.div)`
  color: ${(p) => p.theme.Colors.TEXT};
  width: 300px;
  position: relative;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.Colors.OUTLINE};
  display: flex;
  gap: 1rem;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 0px 5px 0 0;
  }

  div {
    flex: 1;
    > strong {
      font-weight: 700;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 0.7rem;
    top: 0.7rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    > svg {
      width: 1rem;
      height: 1rem;
    }
  }

  ${(props) =>
    !props.$hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
  span {
    position: absolute;
    bottom: 0.6rem;
    width: 86%;
    height: 0.3rem;
    border-radius: 10px;
    transform: translateX(-50%);
    left: 50%;
  }
`
