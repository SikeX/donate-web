import axios from 'axios'
import toast from 'react-hot-toast'

export const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
})

const err = (error) => {
  if (error.response) {
    // let data = error.response.data
    console.log('------异常响应------', error.response.status)
    switch (error.response.status) {
      case 403:
        toast.error('您没有权限访问该页面')
        break
      case 500:
        console.log('------error.response------', error.response)
        toast.error('服务器错误')
        break
      case 404:
        toast.error('很抱歉，资源未找到!')
        break
      case 504:
        toast.error('网络超时，请稍后重试!')
        break
      case 401:
        toast.error('登录已过期，请重新登录!')
        break
      default:
        toast.error('服务器异常，请稍后重试!')
        break
    }
  } else if (error.message) {
    if (error.message.includes('timeout')) {
      toast.error('网络超时，请稍后重试!')
    } else {
      toast.error('服务器异常，请稍后重试!')
    }
  }
  return Promise.reject(error)
}

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)
