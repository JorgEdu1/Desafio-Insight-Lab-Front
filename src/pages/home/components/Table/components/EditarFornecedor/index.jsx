import React from 'react'
import Dialog from '../../../../../../generics/Dialog'
import { NotePencil } from '@phosphor-icons/react'

const EditarFornecedor = ({ id }) => {
  return (
    <Dialog
      content={{
        Trigger: <NotePencil size={20} color="#757575" />,
        Content: <div>Editar Fornecedor</div>,
      }}
    />
  )
}

export default EditarFornecedor
