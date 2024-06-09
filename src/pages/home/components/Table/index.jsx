import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper'
import VerFornecedor from './components/VerFornecedor'
import EditarFornecedor from './components/EditarFornecedor'
import DeletarFornecedor from './components/DeletarFornecedor'
import { useData } from '../../../../hooks/data'

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

export default function CustomizedTables() {
  const { fornecedores, fetchData } = useData()

  useEffect(() => {
    fetchData()
  }, [fetchData])

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
          {fornecedores.map((row) => (
            <StyledTableRow key={row.id}>
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
                  <VerFornecedor id={row.id} />
                  <EditarFornecedor id={row.id} />
                  <DeletarFornecedor id={row.id} />
                </ContainerActions>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
