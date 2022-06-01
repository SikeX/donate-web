import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const register = async (userInfo) => {
  const result = await axios.post(`${baseUrl}/onlineUser/user/register`, userInfo)
  return result.data
}

const login = async (userInfo) => {
  const result = await axios.post(`${baseUrl}/user/login`, userInfo)
  return result.data
}

const addAddress = async (address) => {
  const result = await axios.post(`${baseUrl}/user/address/add`, address)
  return result.data
}

const queryByUserId = async (userId) => {
  const result = await axios.get(`${baseUrl}/user/address/queryByUserId`, { params: { userId } })
  return result.data
}

export default {
  register,
  login,
  addAddress,
  queryByUserId,
}
