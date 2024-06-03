import React from 'react'
import {
  Button,
  Content,
  Container,
  ContainerForm,
  Title,
  Input,
  SectionForm,
  SectionButton,
} from './style'
import Dialog from '../../../../../../generics/Dialog'

const CadastroFuncionario = () => {
  return (
    <Dialog
      content={{
        Trigger: <Button>Cadastrar Funcionário</Button>,
        Content: (
          <Content>
            <Container>
              <Title>Cadastro de Funcionário</Title>
              <form action="">
                <ContainerForm>
                  <SectionForm>
                    <Input type="text" placeholder="Nome" />
                    <Input type="text" placeholder="CNPJ" />
                  </SectionForm>
                  <SectionForm>
                    <Input type="text" placeholder="Endereço" />
                    <Input type="text" placeholder="Telefone" />
                  </SectionForm>
                  <SectionForm>
                    <Input type="text" placeholder="E-mail" />
                    <Input type="text" placeholder="Contato Principal" />
                  </SectionForm>
                  <SectionButton>
                    <Button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      Cadastrar
                    </Button>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      Cancelar
                    </Button>
                  </SectionButton>
                </ContainerForm>
              </form>
            </Container>
          </Content>
        ),
      }}
    />
  )
}

export default CadastroFuncionario
