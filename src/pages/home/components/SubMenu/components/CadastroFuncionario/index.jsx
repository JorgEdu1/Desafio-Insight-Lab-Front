import React from 'react'
import { Button, Content } from './style'
import Dialog from '../../../../../../generics/Dialog'

const CadastroFuncionario = () => {
  return (
    <Dialog
      content={{
        Trigger: <Button>Cadastrar Funcionário</Button>,
        Content: <Content>Cadastro de Funcionário</Content>,
      }}
    />
  )
}

export default CadastroFuncionario
