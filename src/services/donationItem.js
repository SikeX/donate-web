import axios from 'axios'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const getAllItem = async (params) => {
  const result = await axios.get(`${baseUrl}/user/donationItem/list`, { params })
  return result.data
}

const getBannerList = async () => {
  const result = await axios.get(`${baseUrl}/user/donationBanner/list`)
  return result.data
}

const searchItems = async (keyword) => {
  const result = await axios.get(`${baseUrl}/user/donationItem/search`, { params: { keyword } })
  return result.data
}

const getItemsByClassId = async (id) => {
  const result = await axios.get(
    `${baseUrl}/user/donationItem/queryByClassId`,
    { params: { classId: id } }
  )
  return result.data
}

const getItemById = async (id) => {
  const result = await axios.get(
    `${baseUrl}/user/donationItem/queryById`,
    { params: { id } }
  )
  return result.data
}

const getOptionById = async (id) => {
  const result = await axios.get(
    `${baseUrl}/user/donationItem/queryDonationOptionByMainId`,
    { params: { id } }
  )
  return result.data
}

const getSupportNum = async (itemId) => {
  const result = await axios.get(
    `${baseUrl}/user/donationItem/getSupportNum`,
    { params: { itemId } }
  )
  return result.data
}

export default {
  getAllItem,
  getItemsByClassId,
  getItemById,
  getOptionById,
  searchItems,
  getSupportNum,
  getBannerList,
}
