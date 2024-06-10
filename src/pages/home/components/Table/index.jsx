import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import VerFornecedor from './components/VerFornecedor'
import EditarFornecedor from './components/EditarFornecedor'
import DeletarFornecedor from './components/DeletarFornecedor'
import { useData } from '../../../../hooks/data'
import LoadingComponent from '../../../../shared/components/LoadingComponent'

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
    cursor: 'pointer',
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
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('nome')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDataWithLoading = async () => {
      setIsLoading(true)
      await fetchData()
      setIsLoading(false)
    }

    fetchDataWithLoading()
    // eslint-disable-next-line
  }, [])

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const sortedRows = [...fornecedores].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1
    }
    return 0
  })

  if (isLoading) {
    return <LoadingComponent />
  }

  return (
    <TableContainer component={Paper}>
      <StyledTable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell onClick={() => handleRequestSort('nome')}>
              Nome
            </StyledTableCell>
            <StyledTableCell
              align="left"
              onClick={() => handleRequestSort('telefone')}
            >
              Telefone
            </StyledTableCell>
            <StyledTableCell
              align="left"
              onClick={() => handleRequestSort('email')}
            >
              Email
            </StyledTableCell>
            <StyledTableCell
              align="left"
              onClick={() => handleRequestSort('contatoPrincipal')}
            >
              Contato Principal
            </StyledTableCell>
            <StyledTableCell align="left">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
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
                  <DeletarFornecedor id={row.id} name={row.nome} />
                </ContainerActions>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}
