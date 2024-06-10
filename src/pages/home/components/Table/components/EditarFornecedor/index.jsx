import React from 'react'
import { Pencil } from '@phosphor-icons/react'
import Dialog from '../../../../../../generics/Dialog'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useToast } from '../../../../../../hooks/toast'
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
  ErrorSpan,
} from './style'
import LoadingComponent from '../../../../../../shared/components/LoadingComponent'
import { useData } from '../../../../../../hooks/data'

const VerFornecedor = ({ id }) => {
  const { addToast } = useToast()
  const { updateData, getFornecedor } = useData()
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

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

  React.useEffect(() => {
    if (open) {
      const fetchData = async () => {
        const data = await getFornecedor(id)
        reset(data)
        setLoading(false)
      }
      fetchData()
    }
    // eslint-disable-next-line
  }, [open, id])

  const onSubmit = async (data) => {
    const res = await updateData(id, data)
    if (res.status === 200) {
      addToast({
        type: 'success',
        title: 'Sucesso:',
        description: 'Fornecedor atualizado com sucesso!',
      })
    } else {
      addToast({
        type: 'error',
        title: 'Erro:',
        description: 'Erro ao atualizar o fornecedor!',
      })
    }
    setOpen(false)
  }

  return (
    <Dialog
      content={{
        Trigger: <Pencil size={20} color="#757575" />,
        Content: (
          <Content>
            <Container>
              <Title>Editar Fornecedor</Title>
              {loading ? (
                <LoadingComponent />
              ) : (
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
                          type="email"
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
                        <ErrorSpan>
                          {errors.contatoPrincipal?.message}
                        </ErrorSpan>
                      </InputSection>
                    </SectionForm>
                    <SectionButton>
                      <ActionButton
                        type="button"
                        onClick={() => setOpen(false)}
                      >
                        Cancelar
                      </ActionButton>
                      <ActionButton type="submit">Salvar</ActionButton>
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
