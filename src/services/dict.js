import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const getDictItems = async (params) => {
  const result = await axios.get(`${baseUrl}/UserDict/getItems`, { params })
  return result.data
}

export default {
  getDictItems,
}
