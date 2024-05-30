import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from 'styled-components'
import React from 'react'
import Paper from '@mui/material/Paper'
import VerFornecedor from './components/VerFornecedor'
import EditarFornecedor from './components/EditarFornecedor'

import { ContainerActions } from './style'

const StyledTable = styled(Table)(({ theme }) => ({
  border: `1px solid ${theme.Colors.OUTLINE}`,
  borderRadius: '50px',
  borderCollapse: 'collapse',
  width: '100%',
  '& th, td': {
    backgroundColor: theme.Colors.BACKGROUND,
    color: theme.Colors.TEXT,
    borderBottom: `1px solid ${theme.Colors.OUTLINE}`,
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: theme.Colors.OUTLINE,
      color: theme.Colors.ON_PRIMARY,
    },
  },
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.Colors.BACKGROUND,
    color: theme.Colors.TEXT,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(nome, telefone, email, contatoPrincipal) {
  return { nome, telefone, email, contatoPrincipal }
}

const rows = [
  /* 	{
		"id": 1,
		"nome": "teste insomnia",
		"cnpj": "34.567.890/0001-00",
		"endereco": "Rua A, 123, Bairro A, Cidade A",
		"telefone": "(11) 1234-5678",
		"email": "contato@fornecedora.com",
		"contatoPrincipal": "Jorge Eduardo"
	}, */
  createData(
    'teste insomnia',
    '(11) 1234-5678',
    'contato@fornecedora.com',
    'Jorge Eduardo',
  ),
]

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <StyledTable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="left">Telefone</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Contato Principal</StyledTableCell>
            <StyledTableCell align="left">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nome}>
              <StyledTableCell component="th" scope="row">
                {row.nome}
              </StyledTableCell>
              <StyledTableCell align="left">{row.telefone}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">
                {row.contatoPrincipal}
              </StyledTableCell>
              <StyledTableCell align="left">
                <ContainerActions>
                  <VerFornecedor id={1} />
                  <EditarFornecedor id={1} />
                </ContainerActions>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
