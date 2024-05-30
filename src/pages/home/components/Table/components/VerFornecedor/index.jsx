import React from 'react'
import { FilePlus } from '@phosphor-icons/react'
import Dialog from '../../../../../../generics/Dialog'

const VerFornecedor = ({ id }) => {
  return (
    <Dialog
      content={{
        Trigger: <FilePlus size={20} color="#757575" />,
        Content: <div>Ver Fornecedor</div>,
      }}
    />
  )
}

export default VerFornecedor
