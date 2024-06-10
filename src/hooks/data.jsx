import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { DataService } from '../shared/services/DataService/DataService'

const dataContext = createContext()

export function DataProvider({ children }) {
  const [fornecedores, setFornecedores] = useState([])

  const fetchData = async () => {
    const data = await DataService.findAllData()
    setFornecedores(data)
  }

  const getFornecedor = async (id) => {
    const data = await DataService.findDataById(id)
    return data
  }

  const storeData = async (data) => {
    const res = await DataService.storeData(data)

    if (res.status === 201) {
      setFornecedores([res.data, ...fornecedores])
    }

    return res
  }

  const updateData = async (id, data) => {
    const res = await DataService.updateData(id, data)

    if (res.status === 200) {
      setFornecedores(
        fornecedores.map((fornecedor) =>
          fornecedor.id === res.data.id
            ? { ...fornecedor, ...data }
            : fornecedor,
        ),
      )
    }

    return res
  }

  const removeData = () => {
    const remove = async (id) => {
      const res = await DataService.removeData(id)

      if (res.status === 204) {
        setFornecedores(
          fornecedores.filter((fornecedor) => fornecedor.id !== id),
        )
      }

      return res
    }

    return remove
  }

  return (
    <dataContext.Provider
      value={{
        fornecedores,
        fetchData,
        storeData,
        removeData,
        getFornecedor,
        updateData,
      }}
    >
      {children}
    </dataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useData() {
  const context = useContext(dataContext)

  if (!context) {
    throw new Error('useData must be within a DataProvider')
  }

  return context
}
