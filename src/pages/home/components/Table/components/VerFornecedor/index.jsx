import React from 'react'
import { FilePlus } from '@phosphor-icons/react'
import Dialog from '../../../../../../generics/Dialog'
import {
  Content,
  Container,
  ContainerForm,
  Title,
  Input,
  SectionForm,
  SectionButton,
  ActionButton,
  InputMaskedStyled,
  InputSection,
} from './style'
import LoadingComponent from '../../../../../../shared/components/LoadingComponent'
import { useData } from '../../../../../../hooks/data'

const VerFornecedor = ({ id }) => {
  const { getFornecedor } = useData()
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState({
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    email: '',
    contatoPrincipal: '',
  })

  const getData = React.useCallback(async () => {
    const data = await getFornecedor(id)
    setData(data)
    setLoading(false)
  }, [getFornecedor, id])

  React.useEffect(() => {
    if (open) {
      getData()
    }
  }, [open, getData])

  return (
    <Dialog
      content={{
        Trigger: <FilePlus size={20} color="#757575" />,
        Content: (
          <Content>
            <Container>
              <Title>Detalhes do Fornecedor</Title>
              {loading ? (
                <LoadingComponent />
              ) : (
                <form>
                  <ContainerForm>
                    <SectionForm>
                      <InputSection>
                        <Input
                          value={data.nome || ''}
                          readOnly
                          type="text"
                          placeholder="Nome"
                        />
                      </InputSection>
                      <InputSection>
                        <InputMaskedStyled
                          value={data.cnpj || ''}
                          readOnly
                          type="text"
                          placeholder="CNPJ"
                          mask="__.___.___/____-__"
                          replacement={{ _: /\d/ }}
                        />
                      </InputSection>
                    </SectionForm>
                    <SectionForm>
                      <InputSection>
                        <Input
                          value={data.endereco || ''}
                          readOnly
                          type="text"
                          placeholder="Endereço"
                        />
                      </InputSection>
                      <InputSection>
                        <InputMaskedStyled
                          value={data.telefone || ''}
                          readOnly
                          type="text"
                          placeholder="Telefone"
                          mask="(__) _____-____"
                          replacement={{ _: /\d/ }}
                        />
                      </InputSection>
                    </SectionForm>
                    <SectionForm>
                      <InputSection>
                        <Input
                          value={data.email || ''}
                          readOnly
                          type="text"
                          placeholder="E-mail"
                        />
                      </InputSection>
                      <InputSection>
                        <Input
                          value={data.contatoPrincipal || ''}
                          readOnly
                          type="text"
                          placeholder="Contato Principal"
                        />
                      </InputSection>
                    </SectionForm>
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
                    </SectionButton>
                  </ContainerForm>
                </form>
              )}
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
