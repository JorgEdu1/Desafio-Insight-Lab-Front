import { DataApi } from './api/DataApi'

export class DataService {
  static async findAllData() {
    try {
      return await DataApi.findAllData()
    } catch (error) {
      console.error(error)
    }
  }

  static async findDataById(id) {
    try {
      return await DataApi.findDataById(id)
    } catch (error) {
      console.error(error)
    }
  }

  static async updateData(data) {
    try {
      return await DataApi.updateData(data)
    } catch (error) {
      console.error(error)
    }
  }

  static async storeData(data) {
    try {
      return await DataApi.storeData(data)
    } catch (error) {
      console.error(error)
    }
  }

  static async removeData(id) {
    try {
      return await DataApi.removeData(id)
    } catch (error) {
      console.error(error)
    }
  }
}
