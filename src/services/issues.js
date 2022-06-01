import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const getAllIssues = async () => {
  const result = await axios.get(`${baseUrl}/donationIssues/donationIssues/list`)
  return result.data
}

export default {
  getAllIssues,
}
