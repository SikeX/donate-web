import { atom, selector } from 'recoil'

export const donationItemState = atom({
  key: 'donationItemState',
  default: {},
})

export const donateOptionState = atom({
  key: 'donateOptionState',
  default: {},
})

export const isLoginState = atom({
  key: 'isLoginState',
  default: localStorage.getItem('userInfo') !== null,
})

export const loginModalState = atom({
  key: 'loginModalState',
  default: {
    isShow: false,
    type: 'login',
  },
})

export const searchParamsState = atom({
  key: 'searchParamsState',
  default: {
    category: '',
    donationClass: '',
    status: '',
    pageNo: 1,
  },
})
