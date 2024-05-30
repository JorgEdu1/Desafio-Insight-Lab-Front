import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { DataService } from '../shared/services/DataService/DataService'

const dataContext = createContext()

export function DataProvider({ children }) {
  const [fornecedores, setFornecedores] = useState([])

  const fetchData = async (object) => {
    const data = await DataService.findAllData()
    setFornecedores(data)
  }

  const storeData = async (data, object) => {
    const res = await DataService.storeData(data)
    if (res.status === 201) {
      fetchData(object)
    }
  }

  const removeData = async (id, object) => {
    const res = await DataService.removeData(id)

    if (res.status === 201) {
      fetchData(object)
    }
  }

  return (
    <dataContext.Provider
      value={{
        fornecedores,
        storeData,
        removeData,
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
