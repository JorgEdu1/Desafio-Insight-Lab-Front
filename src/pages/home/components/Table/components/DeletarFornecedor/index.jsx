import React from 'react'
import { Trash } from '@phosphor-icons/react'
import Dialog from '../../../../../../generics/Dialog'
import {
  Content,
  Container,
  ContainerForm,
  Title,
  SectionButton,
  ActionButton,
} from './style'
import { useData } from '../../../../../../hooks/data'
import { useToast } from '../../../../../../hooks/toast'

const VerFornecedor = ({ id, name }) => {
  const { removeData } = useData()
  const { addToast } = useToast()
  const [open, setOpen] = React.useState(false)

  const handleSubmit = async () => {
    const res = await removeData(id)

    if (res.status === 204) {
      addToast({
        type: 'sucess',
        title: 'Sucesso:',
        description: 'Funcionário deletado com sucesso!',
      })
    } else {
      addToast({
        type: 'error',
        title: 'Erro:',
        description: 'Não foi possivel deletar!',
      })
    }
  }

  return (
    <Dialog
      content={{
        Trigger: <Trash size={20} color="#757575" />,
        Content: (
          <Content>
            <Container>
              <Title>Deseja deletar {name}?</Title>
              <form onSubmit={handleSubmit}>
                <ContainerForm>
                  <SectionButton>
                    <ActionButton
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        setOpen(false)
                      }}
                    >
                      Fechar
                    </ActionButton>
                    <ActionButton type="submit">Deletar</ActionButton>
                  </SectionButton>
                </ContainerForm>
              </form>
            </Container>
          </Content>
        ),
      }}
      open={open}
      setOpen={setOpen}
    />
  )
}

export default VerFornecedor
