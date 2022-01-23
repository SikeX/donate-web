import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const getAllClass = async () => {
  const result = await axios.get(`${baseUrl}user/donationClass/list`)
  return result.data
}

const getAll = async () => {
  const result = await axios.get(baseUrl)
  return result.data
}

const getTodoList = async (todo) => {
  const result = await axios.get(`${baseUrl}/${todo}`)
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
  getAllClass,
}
