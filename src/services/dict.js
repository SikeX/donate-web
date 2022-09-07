import { getAction } from './manage'

const getDictItems = (params) => getAction('/UserDict/getItems', params)

export default {
  getDictItems,
}
