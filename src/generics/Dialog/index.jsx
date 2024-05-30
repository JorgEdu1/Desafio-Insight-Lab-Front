import * as D from '@radix-ui/react-dialog'
import styled from 'styled-components'
import React from 'react'

const DOverlay = styled(D.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

const Dialog = ({ content }) => {
  return (
    <D.Root>
      <D.Trigger>{content.Trigger}</D.Trigger>
      <DOverlay>
        <D.Content>{content.Content}</D.Content>
      </DOverlay>
    </D.Root>
  )
}

export default Dialog
