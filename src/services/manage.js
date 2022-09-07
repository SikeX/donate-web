import { service } from '../utils/axiosConfig'

export const postAction = (url, data) => {
  return service({
    method: 'POST',
    url: url,
    data: data,
  })
}

export const getAction = async (url, params) => {
  return service({
    method: 'GET',
    url: url,
    params: params,
  })
}

export const putAction = async (url, data) => {
  return service({
    method: 'PUT',
    url: url,
    data: data,
  })
}

export const deleteAction = async (url, params) => {
  return service({
    method: 'DELETE',
    url: url,
    params: params,
  })
}

export const httpAction = async (url, method, data) => {
  return service({
    method: method,
    url: url,
    data: data,
  })
}
