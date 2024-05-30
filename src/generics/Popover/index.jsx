import * as P from '@radix-ui/react-popover'

import React from 'react'

const Popover = ({ content }) => {
  return (
    <P.Root>
      <P.Trigger>{content.Trigger}</P.Trigger>
      <P.Content>{content.Content}</P.Content>
    </P.Root>
  )
}

export default Popover
