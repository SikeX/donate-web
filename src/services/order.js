import axios from 'axios'
import qs from 'qs'
import { BASE_URL } from './api'

const baseUrl = BASE_URL

const postOrder = async (orderInfo) => {
  const result = await axios.post(`${baseUrl}/user/donationOrder/add`, orderInfo)
  return result.data
}

const updateOrder = async (orderInfo) => {
  const result = await axios.put(`${baseUrl}/user/donationOrder/edit`, orderInfo)
  return result.data
}

const getOrder = async (orderNo) => {
  const result = await axios.get(`${baseUrl}/user/donationOrder/queryByOrderNo`, { params: { orderNo } })
  return result.data
}

const getOrdersByItemId = async (itemId) => {
  const result = await axios.get(`${baseUrl}/user/donationOrder/queryByItemId`, { params: { itemId } })
  return result.data
}

const postAlipay = async (orderInfo) => {
  const result = await axios.post(`${baseUrl}/alipay/create`, qs.stringify(orderInfo), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
  })
  return result.data
}

const postWxPay = async (wxOrderInfo) => {
  const result = await axios.get(`${baseUrl}/wxPay`, { params: wxOrderInfo })
  return result.data
}

export default {
  postOrder,
  getOrder,
  updateOrder,
  postAlipay,
  postWxPay,
  getOrdersByItemId,
}
