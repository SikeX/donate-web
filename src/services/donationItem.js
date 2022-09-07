import axios from 'axios'
import { BASE_URL } from './api'
import { getAction } from './manage'

const baseUrl = BASE_URL

const getAllItem = (params) => getAction('/user/donationItem/list', params)

const getBannerList = (params) => getAction('/user/donationBanner/list', params)

const searchItems = (params) => getAction('/user/donationItem/search', params)

const getItemsByClassId = (params) => getAction('/user/donationItem/queryByClassId', params)

const getItemById = async (id) => {
  const result = await axios.get(`${baseUrl}/user/donationItem/queryById`, { params: { id } })
  return result.data
}

const getOptionById = async (id) => {
  const result = await axios.get(`${baseUrl}/user/donationItem/queryDonationOptionByMainId`, { params: { id } })
  return result.data
}

const getSupportNum = async (itemId) => {
  const result = await axios.get(`${baseUrl}/user/donationItem/getSupportNum`, { params: { itemId } })
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
