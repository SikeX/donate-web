import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const getAllItem = async (params) => {
  const result = await axios.get(`${baseUrl}/user/protocolItem/list`, { params })
  return result.data
}

const queryByUsername = async (username) => {
  const result = await axios.get(`${baseUrl}/user/protocolItem/queryByUsername`, { params: { username } })
  return result.data
}

const getItemById = async (id) => {
  const result = await axios.get(`${baseUrl}/user/protocolItem/queryById`, { params: { id } })
  return result.data
}

const getOutcome = async (itemId) => {
  const result = await axios.get(`${baseUrl}/user/protocolItem/listProtocolOutcomeByItemId`, { params: { itemId } })
  return result.data
}

export default {
  getAllItem,
  queryByUsername,
  getItemById,
  getOutcome,
}
