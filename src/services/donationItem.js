import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const getAllItem = async (params) => {
  const result = await axios.get(`${baseUrl}user/donationItem/list`, { params })
  return result.data
}

const getItemsByClassId = async (id) => {
  const result = await axios.get(
    `${baseUrl}user/donationItem/queryByClassId`,
    { params: { classId: id } }
  )
  return result.data
}

const getItemById = async (id) => {
  const result = await axios.get(
    `${baseUrl}user/donationItem/queryById`,
    { params: { id } }
  )
  return result.data
}

const getOptionById = async (id) => {
  const result = await axios.get(
    `${baseUrl}user/donationItem/queryDonationOptionByMainId`,
    { params: { id } }
  )
  return result.data
}

const postTaskList = async (task) => {
  const result = axios.post(`${baseUrl}/Tasks`, task)
  return result
}

const postTodo = async (taskName, todo) => {
  const result = axios.post(`${baseUrl}/Tasks/${taskName}`, todo)
  return result
}

const deleteTodo = async (taskName, todoName) => {
  const result = axios.delete(`${baseUrl}/Tasks/${taskName}`, { data: { name: todoName } })
  return result
}

export default {
  getAllItem,
  getItemsByClassId,
  getItemById,
  getOptionById,
}
