import { api } from '../../api/axios'

export class DataApi {
  static async findAllData() {
    try {
      const response = await api.get('/fornecedor')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  static async findDataById(id) {
    try {
      const response = await api.get(`/fornecedor/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  static async updateData(data) {
    try {
      const response = await api.put(`/fornecedor/${data.id}`, data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  static async storeData(data) {
    try {
      const response = await api.post('/fornecedor', data)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

  static async removeData(id) {
    try {
      const response = await api.delete(`/fornecedor/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
