import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const postOrder = async (orderInfo) => {
  const result = await axios.post(`${baseUrl}/user/donationOrder/add`, orderInfo)
  return result.data
}

export default {
  postOrder,
}
