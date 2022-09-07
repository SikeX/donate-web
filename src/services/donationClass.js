import { getAction } from './manage'

const getAllClass = (params) => getAction('/user/donationClass/list', params)

const getHomeClass = (params) => getAction('/user/donationClass/getHomeClass', params)

export default {
  getAllClass,
  getHomeClass,
}
