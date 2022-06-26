import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const getAllClass = async () => {
  const result = await axios.get(`${baseUrl}/user/donationClass/list`)
  return result.data
}

const getHomeClass = async () => {
  const result = await axios.get(`${baseUrl}/user/donationClass/getHomeClass`)
  return result.data
}

export default {
  getAllClass,
  getHomeClass,
}
