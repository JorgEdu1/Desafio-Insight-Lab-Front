import React, { useEffect } from 'react'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useData } from '../../../../../../hooks/data'
import { useToast } from '../../../../../../hooks/toast'
import {
  Button,
  Content,
  Container,
  ContainerForm,
  Title,
  Input,
  SectionForm,
  SectionButton,
  ActionButton,
  InputMaskedStyled,
  ErrorSpan,
  InputSection,
} from './style'
import Dialog from '../../../../../../generics/Dialog'

const CadastroFornecedor = () => {
  const [open, setOpen] = React.useState(false)
  const { storeData } = useData()
  const { addToast } = useToast()

  const schema = zod.object({
    nome: zod.string().min(3, { message: 'Nome muito curto' }),
    cnpj: zod.string().min(14, { message: 'CNPJ inválido' }),
    endereco: zod.string().min(3, { message: 'Endereço muito curto' }),
    telefone: zod.string().min(14, { message: 'Telefone inválido' }),
    email: zod.string().email({ message: 'E-mail inválido' }),
    contatoPrincipal: zod.string().min(3, { message: 'Contato muito curto' }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (open) {
      reset()
    }
  }, [open, reset])

  const onSubmit = async (data) => {
    const res = await storeData(data)
    if (res.status === 201) {
      addToast({
        type: 'success',
        title: 'Sucesso:',
        description: 'Funcionário cadastrado com sucesso!',
      })
    } else {
      addToast({
        type: 'error',
        title: 'Erro:',
        description: res.data.message,
      })
    }
    setOpen(false)
  }

  return (
    <Dialog
      content={{
        Trigger: <Button>Cadastrar Fornecedor</Button>,
        Content: (
          <Content>
            <Container>
              <Title>Cadastro de Fornecedor</Title>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ContainerForm>
                  <SectionForm>
                    <InputSection>
                      <Input
                        {...register('nome')}
                        type="text"
                        placeholder="Nome"
                      />
                      <ErrorSpan>{errors.nome?.message}</ErrorSpan>
                    </InputSection>
                    <InputSection>
                      <InputMaskedStyled
                        {...register('cnpj')}
                        type="text"
                        placeholder="CNPJ"
                        mask="__.___.___/____-__"
                        replacement={{ _: /\d/ }}
                      />
                      <ErrorSpan>{errors.cnpj?.message}</ErrorSpan>
                    </InputSection>
                  </SectionForm>
                  <SectionForm>
                    <InputSection>
                      <Input
                        {...register('endereco')}
                        type="text"
                        placeholder="Endereço"
                      />
                      <ErrorSpan>{errors.endereco?.message}</ErrorSpan>
                    </InputSection>
                    <InputSection>
                      <InputMaskedStyled
                        {...register('telefone')}
                        type="text"
                        placeholder="Telefone"
                        mask="(__) _____-____"
                        replacement={{ _: /\d/ }}
                      />
                      <ErrorSpan>{errors.telefone?.message}</ErrorSpan>
                    </InputSection>
                  </SectionForm>
                  <SectionForm>
                    <InputSection>
                      <Input
                        {...register('email')}
                        type="text"
                        placeholder="E-mail"
                      />
                      <ErrorSpan>{errors.email?.message}</ErrorSpan>
                    </InputSection>
                    <InputSection>
                      <Input
                        {...register('contatoPrincipal')}
                        type="text"
                        placeholder="Contato Principal"
                      />
                      <ErrorSpan>{errors.contatoPrincipal?.message}</ErrorSpan>
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
                      Cancelar
                    </ActionButton>
                    <ActionButton type="submit">Cadastrar</ActionButton>
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

export default CadastroFornecedor
